import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import DropDown from '../DropDown';

import logo from '../../images/boomtown-logo.svg';
import './styles.css';

const Head = () => (
  <Toolbar className="headerBar">
    <ToolbarGroup>
      <a href="/">
        <img src={logo} alt="Boomtown" className="headerBar-logo" />
      </a>
      <DropDown className="drop-down" />
    </ToolbarGroup>
    <div className="headerBar-right">
      <a href="/profile/TyHcYnSocuOg6PmWQivgxerTLcq2">
        <RaisedButton label="MY PROFILE" primary />
      </a>
      <RaisedButton label="LOGOUT" secondary className="btn-logout" />
    </div>
  </Toolbar>
);

export default Head;

