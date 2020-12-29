import './App.css';
import Header from './Components/Header.js'
import SideDrawer from './Components/SideDrawer/SideDrawer.js';
import Backdrop from './Components/Backdrop.js';
import {Component} from 'react';

class App extends Component {

  state = {
    sidedrawerOpen: false
  };

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
        <Header drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sidedrawerOpen}/>
        {this.state.sidedrawerOpen && <Backdrop click={this.backdropClickHandler}/>}

      </div>
    );
  }
}

export default App;
