import React from "react";

import { user } from "../images";
import './Profile.scss';

export const Profile = () => {
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
                <div className='iconUser'>
                  <img src={item.imageSrc} alt={item.namePicture}/>
                </div>
                <div className='textBlockUser'>
                  <span>
                  {item.name}
                </span>
                  <span>
                  {item.discription}
                </span>
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
              <div className="button">
                Save Changes
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}