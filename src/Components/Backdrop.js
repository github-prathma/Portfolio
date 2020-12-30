import React, { Component } from 'react';
import "../CSS/Backdrop.css"

class Backdrop extends Component {

    render() {

        let backDropClasses = 'backdrop'

        if (this.props.fromHeaderTab) {
            backDropClasses = 'backdrop fromHeader'
        } 
        return (

            <div className={backDropClasses} onClick={this.props.click}></div>
        )
    }
}

export default Backdrop;