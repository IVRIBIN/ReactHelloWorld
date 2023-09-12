import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
      <div>
        <div>
          <img src="https://avatars.mds.yandex.net/i?id=d24b0bf8f3e62feb0f87d2847482aaf96c53debe-3963629-images-thumbs&n=13"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + desc
        </div>
      </div>
    );
}

export default ProfileInfo;