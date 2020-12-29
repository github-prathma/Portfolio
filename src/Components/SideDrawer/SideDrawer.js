import React, { Component }  from 'react';
import '../../CSS/SideDrawer.css';

class SideDrawer extends Component {

    render() {

        let drawerClasses = 'side-drawer';

        if (this.props.show) {
            drawerClasses = 'side-drawer open-drawer';
        }
        return (

            <nav className={drawerClasses}>
                <ul>
                    <li><a className="smoothscroll" href="#home">About</a></li>
                    <li><a className="smoothscroll" href="#home">Education</a></li>                                
                    <li><a className="smoothscroll" href="#home">Experience</a></li>
                    <li><a className="smoothscroll" href="#home">Skills</a></li>
                    <li><a className="smoothscroll" href="#home">Projects</a></li>
                    <li><a className="smoothscroll" href="#home">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideDrawer;