import React from 'react';
import './UserInfo.css';


function UserInfo() {
  return (
    <section className='userinfo'>
      <h2 className='userinfo__title'>Привет, Виталий!</h2>
        <div className='userinfo_container-name'>
          <p className='userinfo__name'>Имя</p>
          <input className='userinfo__name-value'></input>
        </div>

          <div className='userinfo_container-email'>
            <p className='userinfo__email'>E-mail</p>
            <input className='userinfo__email-value'></input>
          </div>
        <div className='userinfo_container-button'>
          <button className='userinfo__button-edit'>Редактировать</button>
          <button className='userinfo__button-signout'>Выйти из аккаунта</button>
        </div>


    </section>
  )
}


export default UserInfo;
