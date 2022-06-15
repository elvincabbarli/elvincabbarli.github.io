import React, { useState } from "react";
import "./sidebar.css";
import {
  LineStyle,
  People,
  Equalizer,
  EventNote,
  ExpandMore,
  Mail,
  Feedback,
  Chat,
} from "@material-ui/icons";



export default function SideBar() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownCLick = () => {
    setDropdown(!dropdown);
  };

 
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>

          <nav class="navigation">
              <ul class="mainmenu">
                <li><a href="#"><Equalizer className="sideBarIcons" />Statistika</a></li>
                <li><a href="#"><People className="sideBarIcons" />Üzvlər</a>
                  <ul class="submenu">
                    <li><a href="#">Mühasibatlıq</a></li>
                    <li><a href="#">IT(Web)</a></li>
                    <li><a href="#">IT(RM)</a></li>
                    <li><a href="#">Logistika</a></li>
                    <li><a href="#">HR</a></li>
                  </ul>
                </li>
                <li><a href="#"><EventNote className="sideBarIcons" />Calendar</a></li>
              </ul>
          </nav>
          
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitleSecond">Bildirimlər</h3>
          <nav class="navigation">
              <ul class="mainmenu">
                <li><a href="#"><Feedback className="sideBarIcons" />
                     GeriDönüş</a></li>
                <li><a href="#"><Chat className="sideBarIcons" />
              Mesajlar</a></li>
              </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
