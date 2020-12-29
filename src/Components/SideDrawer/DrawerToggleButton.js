import React, { Component }  from 'react';
import '../../CSS/DrawerToggleButton.css';

class DrawerToggleButton extends Component {
    render() {
        return (
            <button className="toggle-button" onClick={this.props.click}>
                <div className="toggle-button_line"/>
                <div className="toggle-button_line"/>
                <div className="toggle-button_line"/>
            </button>
            
        )
    }
}

export default DrawerToggleButton;