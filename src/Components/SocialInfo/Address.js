import React, {Component} from 'react';
import '../../CSS/Address.css'
import CancelIcon from '@material-ui/icons/Cancel';

class Address extends Component {

    render() {
        let addressClasses = "address_page"

        if (this.props.show) {
            addressClasses = "address_page open"
        } 
        return (
            <div className={addressClasses}>
                
                <div className="cancel">
                    <div className="spacer"></div>
                    <div>
                        <button className="close-button" onClick={this.props.closePage}>
                            <CancelIcon/>
                        </button>
                    </div>
                </div>

                <div className="address-info">

                </div>

            </div>
        )
    }
}

export default Address;