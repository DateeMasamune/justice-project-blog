import React, {useState} from "react";

import { user } from "../../services/mock";
import {dontUser} from "../../services/mock";
import './Profile.scss';
import {ButtonProfile, SaveChange} from "./ButtonProfile/ButtonProfile";
import {userTest} from "../../constants";

export const Profile = () => {
	const userLog = JSON.parse(localStorage.getItem('users')) || []
	const id = JSON.parse(localStorage.getItem('id')) || ''
	const iUser = userLog.filter(item => item.firstName.id === id)
	const [profileInfo, setProfileInfo] = useState(...iUser)
	console.log('===>iUser', iUser);
	console.log('===>profileInfo', profileInfo);
  return (
    <div className="container">
      <div className="content profile">
        <div className="title profile">
          <h1>Profile</h1>
        </div>
        <div className="block profile">
          { 
            user.map(item => (
              <div className='user'>
                <div className='rame'></div>
								{
									userLog ?
										<div className='iconUser'>
											<img src={item.imageSrc} alt={item.namePicture}/>
										</div>
											:
										<div className='iconUser'>
											<div className='dontUser'>
												<img src={dontUser[0].imageSrc} alt=""/>
											</div>
										</div>
								}
                <div className='textBlockUser'>
                  <ButtonProfile text="Change photo"/>
                  <ButtonProfile text="Delete photo"/>
                </div>
              </div>
            ))
          }
          <div className="formUser">
            <form>
              <div className="inputName">
                <div className="block">
                  <span>First name</span>
                  <input type="text"/>
                </div>
                <div className="block">
                  <span>Last name</span>
                  <input type="text"/>
                </div>
              </div>
              <div className="inputDescription">
                <div className="block">
                  <span>Description</span>
                  <input type="text"/>
                </div>
              </div>
             	<SaveChange text={'Save Changes'} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}