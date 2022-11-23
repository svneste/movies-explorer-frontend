import React from 'react';
import './Profile.css';

import UserInfo from '../UserInfo/UserInfo';


function Profile({ handleOutSign, handleUpdateUser }) {
  return (
    <div>

      <UserInfo handleOutSign={handleOutSign} handleUpdateUser={handleUpdateUser} />
    </div>
  )
}


export default Profile;
