import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, useLocation, useHistory, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import SavedMovies from "./SavedMovies/SavedMovies";
import * as auth from "../utils/auth.js";
import api from "../utils/MainApi";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Popup from "./Popup/Popup";

function App() {
  const { pathname } = useLocation();
  const [textPopup, setTextPopup] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then(() => {
          setLoggedIn(true);
          history.push("/movies");
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getUserInfo();
    }
  }, [loggedIn]);

  function getUserInfo() {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleRegister = (name, email, password) => {
    setIsOpenPreloader(true);
    auth
      .register(name, email, password)
      .then(() => {
        setIsOpenPreloader(false);
        handleAutorize(email, password);
        handleOpenPopup("Вы успешно зарегистрированы");
        history.push("/movies");
      })
      .catch((err) => {
        handleOpenPopup("Ошибка регистрации");
      })
      .finally(() => {
        setIsOpenPreloader(false);
      });
  };

  const handleAutorize = (email, password) => {
    setIsOpenPreloader(true);
    auth
      .autorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          setIsOpenPreloader(false);
          history.push("/movies");
        } else {
          console.log("Ошибка - в ответе нет токена");
          return;
        }
      })
      .catch(() => {
        handleOpenPopup("Ошибка на сервере");
        setIsOpenPreloader(false);
      });
  };

  function handleUpdateUser(name, email) {
    api.editUserProfile(name, email).then(
      (res) => {
        setCurrentUser(res);
        handleOpenPopup("Данные обновлены");
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function handleOutSign() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("textSearch");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("saveFilms");
    localStorage.removeItem("checked");
    history.push("/");
  }

  function handleRemoveMovieCard(id) {
    api
      .removeMovieCard(id)
      .then((res) => {
        handleOpenPopup("Карточка успешно удалена");
      })
      .catch((err) => console.log(err));
  }

  function handleOpenPopup(text) {
    setTextPopup(text);
    setIsOpenPopup(!isOpenPopup);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile" ? (
          <Header loggedIn={loggedIn} />
        ) : (
          ""
        )}

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signin">
            <Login
              handleAutorize={handleAutorize}
              isOpenPreloader={isOpenPreloader}
            />
          </Route>

          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              isOpenPreloader={isOpenPreloader}
            />
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            handleOpenPopup={handleOpenPopup}
            isOpenPreloader={isOpenPreloader}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            handleRemoveMovieCard={handleRemoveMovieCard}
            handleOpenPopup={handleOpenPopup}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            handleOutSign={handleOutSign}
            handleUpdateUser={handleUpdateUser}
            loggedIn={loggedIn}
            isOpenPreloader={isOpenPreloader}
          />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        {pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ? (
          <Footer />
        ) : (
          ""
        )}
      </CurrentUserContext.Provider>
      <Popup
        isOpenPopup={isOpenPopup}
        handleOpenPopup={handleOpenPopup}
        textPopup={textPopup}
      />
    </div>
  );
}

export default App;
