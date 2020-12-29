import React, { Component } from 'react';
import "../App.css"
import "../CSS/Header.css"
import Portfolio from '../Images/PortfolioIcon.png'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton.js';

class Header extends Component {

    render() {
        return (
            <div className="header"> 
                <div className="toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <div className="header-left">
                    <img src={Portfolio} alt="no img"/>
                    {/* <h4>Prathma Rastogi</h4> */}
                </div>
                <div className="spacer"/>

                <div className="header-right">
                    <nav className="c-nav">
                        <ul >
                            <li><a className="smoothscroll" href="#home">About</a></li>
                            <li><a className="smoothscroll" href="#home">Education</a></li>                                <li><a className="smoothscroll" href="#home">Experience</a></li>
                            <li><a className="smoothscroll" href="#home">Skills</a></li>
                            <li><a className="smoothscroll" href="#home">Projects</a></li>
                            <li><a className="smoothscroll" href="#home">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
                
                
            </div>
        )
    }


}

export default Header;