import './App.css';
import Header from './Components/Header.js'
import SideDrawer from './Components/SideDrawer/SideDrawer.js';
import Backdrop from './Components/Backdrop.js';
import SocialProfile from './Components/SocialInfo/SocialProfile.js';
import ContactMe from './Components/SocialInfo/ContactMe.js';
import Address from './Components/SocialInfo/Address.js'
import {Component} from 'react';

class App extends Component {

  state = {
    sidedrawerOpen: false,
    openSocialProfiles: false,
    openContactMe: false,
    openAddress: false
  };

  openProfilePage = () => {
    this.setState((prevState) => {
      return {openSocialProfiles: !prevState.openSocialProfiles};
    })
  }

  openContactMePage = () => {
    this.setState((prevState) => {
      return {
        openContactMe: !prevState.openContactMe
      };
    })
  }

  openAddressPage = () => {
    this.setState((prevState) => {
        return {
          openAddress: !prevState.openAddress
        }
    })
  }

  closeProfilePage = () => {
    this.setState({
      openSocialProfiles:false
    })
  }

  closeContactMePage = () => {
    this.setState({
      openContactMe: false
    })
  }

  closeAddressPage = () => {
    this.setState({
      openAddress: false
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

        <Header drawerClickHandler={this.drawerToggleClickHandler} socialProfileClickHandler={this.openProfilePage} contactMeClickHandler={this.openContactMePage} addressClickHandler={this.openAddressPage}/>
        <SideDrawer show={this.state.sidedrawerOpen}/>
        {this.state.sidedrawerOpen && <Backdrop click={this.backdropClickHandler}/>}
        {this.state.openSocialProfiles && <SocialProfile show={this.state.openSocialProfiles} closePage={this.closeProfilePage}/>}
        {this.state.openContactMe && <ContactMe show={this.state.openContactMe} closePage={this.closeContactMePage}/>}
        {this.state.openAddress && <Address show={this.state.openAddress} closePage={this.closeAddressPage}/>}
      
      </div>
    );
  }
}

export default App;
