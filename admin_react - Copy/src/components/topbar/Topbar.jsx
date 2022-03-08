import React from 'react'
import './topbar.css'
import {NotificationsNone , Language , Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">VTP22</span>
            </div>    
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECfx8umbbk9MTUYtU_XASGttGE9sjFoVlLwZWVEFHa-84eATq3TuN8zgXPvAEtkrpJMc&usqp=CAU" alt="Profile Picture" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
