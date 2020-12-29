import React, {Component} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../../CSS/SocialProfile.css';

class SocialProfile extends Component {

    render() {

        let socialInfoClasses = "social-info_page"

        if (this.props.show) {
            socialInfoClasses = "social-info_page open"
        }

        return (

            <div className={socialInfoClasses}>
                <ul className="profiles">
                    <li>
                        <a>
                            <GitHubIcon/>
                        </a>
                    </li>
                </ul>

            </div>
        )
    }
}
export default SocialProfile;