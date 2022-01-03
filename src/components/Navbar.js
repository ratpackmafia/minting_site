import React from 'react';



export default function Navbar() {
    return (
       <ul class="navigation-bar">
      <li>
        <StyledLogo alt={"logo"} src={"/config/images/logo.png"} style={{"margin-left":"15%"}} />
      </li>
      <li class="float">
        <a class="twitter" href="#"><StyledNavLogo alt={"twitter"} src={"/config/images/twitter.png"}  /></a>
      </li>
      <li class="float">
        <a class="discord" href="#"><StyledNavLogo alt={"discord"} src={"/config/images/discord.png"} /></a>
      </li>
    </ul>
    );
}
