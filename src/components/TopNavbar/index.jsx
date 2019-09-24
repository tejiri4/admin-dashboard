// react libraries
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// styles
import './TopNavbar.scss';

// components
import ToggleAppMode from '../ToggleAppMode';
import LoggedInUserDetails from '../LoggedInUserDetails';
import NotificationIcon from '../NotificationIcon';

class TopNavbar extends Component {
  state = {
   showLiveMode: false,
   loggedInUserDetails: {
     name: "Oluwatobi Mayowa"
   },
   notificationCount: 1
  }

  handleModeChange = () => this.setState({ showLiveMode: !this.state.showLiveMode })

  render() {
    const path = this.props.history.location.pathname;
    return (
      <div className="top-nav-bar">
        <div className="top-nav-bar__left">
          {path.replace("/", "")}
        </div>
        <div className="top-nav-bar__right">
          <ToggleAppMode status={this.state.showLiveMode} handleToggle={this.handleModeChange} />
          <div>
            <NotificationIcon number={this.state.notificationCount} />
          </div>
          <div>
            <LoggedInUserDetails name={this.state.loggedInUserDetails.name} />
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(TopNavbar);
