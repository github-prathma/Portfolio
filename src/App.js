import './App.css';
import Header from './Components/Header.js'
import SideDrawer from './Components/SideDrawer/SideDrawer.js';
import Backdrop from './Components/Backdrop.js';
import SocialProfile from './Components/SocialInfo/SocialProfile.js';
import {Component} from 'react';

class App extends Component {

  state = {
    sidedrawerOpen: false,
    openSocialProfiles: false
  };

  openProfilePage = () => {
    this.setState((prevState) => {
      return {openSocialProfiles: !prevState.openSocialProfiles};
    })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidedrawerOpen: !prevState.sidedrawerOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({
      sidedrawerOpen: false
    })
  }

  render () {
    return (
      <div style={{height: '100%'}}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} socialProfileClickHandler={this.openProfilePage}/>
        <SideDrawer show={this.state.sidedrawerOpen}/>
        {this.state.sidedrawerOpen && <Backdrop click={this.backdropClickHandler}/>}
        {this.state.openSocialProfiles && <SocialProfile show={this.state.openSocialProfiles}/>}
      </div>
    );
  }
}

export default App;
