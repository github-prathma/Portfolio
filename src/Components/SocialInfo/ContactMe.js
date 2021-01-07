import React, {Component} from 'react';
import '../../CSS/ContactMe.css'
import ContactMeImg from '../../Images/ContactMe.png'
import CancelIcon from '@material-ui/icons/Cancel';
// import TextField from '@material-ui/core/TextField';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

class ContactMe extends Component {

    render() {
        let socialInfoClasses = "contact-me_page"

        if (this.props.show) {
            socialInfoClasses = "contact-me_page open"
        } 

        return (

            <div className={socialInfoClasses}>
                
                <div className="cancel">
                    <div className="spacer"></div>
                    <div>
                        <button className="close-button" onClick={this.props.closePage}>
                            <CancelIcon/>
                        </button>
                    </div>
                    
                </div>

                <div className="contact-details">
                    <div className="title">Contact Me!</div>

                    <div className="contact-details_info">
                       <div className="contact-details_icon">
                            <img src={ContactMeImg} alt="no icon"/>
                       </div>


                        <div className="contact-details_form">
                            <div className="email-form">
                                <ul>
                                    <li>
                                        <a href="mailto: prathma0909@gmail.com">
                                            <EmailIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto: prathma0909@gmail.com">
                                            prathma0909@gmail.com
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                            
                            <div className="call-me">
                                <ul>
                                        <li>
                                            <a href="tel:+13158021375">
                                                <CallIcon/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+13158021375">
                                            +1 (315)-802-1375
                                            </a>
                                        </li>
                                    
                                </ul>
                        
                            </div>

                        </div>
                    
                    </div>

                    



                </div>
                
                

            </div>
        )
    }
}

export default ContactMe;