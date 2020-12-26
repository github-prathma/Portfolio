import React, { Component } from 'react';
import "../App.css"
import "../CSS/Header.css"
import Portfolio from '../Images/PortfolioIcon.png'
import ListIcon from '@material-ui/icons/List';

class Header extends Component {

    render() {
        return (
            <div className="header"> 
                <div className="header-left">
                    <img src={Portfolio} alt="image"/>
                    {/* <h4>Prathma Rastogi</h4> */}
                </div>

                <div className="header-right">
                    <nav className="c-nav">
                        <ul >
                            <li><a className="smoothscroll" href="#home">About</a></li>
                            <li><a className="smoothscroll" href="#home">Education</a></li>
                            <li><a className="smoothscroll" href="#home">Experience</a></li>
                            <li><a className="smoothscroll" href="#home">Skills</a></li>
                            <li><a className="smoothscroll" href="#home">Projects</a></li>
                            <li><a className="smoothscroll" href="#home">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            // <React.Fragment>

            //     <header id="App-header">
            //         <nav id="nav-wrap">
            //         <ul id="nav" className="nav">
            //             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            //             <li><a className="smoothscroll" href="#about">About</a></li>
            //             <li><a className="smoothscroll" href="#resume">Resume</a></li>
            //             <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            //             <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            //             <li><a className="smoothscroll" href="#contact">Contact</a></li>
            //         </ul>
            //         </nav>
            //     </header>

            // </React.Fragment>
        )
    }


}

export default Header;