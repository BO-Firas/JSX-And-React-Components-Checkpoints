import React from 'react';
import myImage from "./me.jpg";

function ProfilePhoto() {
  return (
    <div className="ProfilePhoto">
      <img src={myImage} alt="Profile" height={190} width={170} />
    </div>
  );
}

export default ProfilePhoto;
