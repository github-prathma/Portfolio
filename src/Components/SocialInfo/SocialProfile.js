import React, {Component} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import '../../CSS/SocialProfile.css';
import CancelIcon from '@material-ui/icons/Cancel';
import BookIcon from '@material-ui/icons/Book';

class SocialProfile extends Component {

    render() {

        let socialInfoClasses = "social-info_page"

        if (this.props.show) {
            socialInfoClasses = "social-info_page open"
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
                <div className="all-profiles">
                    <div className="all-profiles_modal">
                            <div className="title">Have a look at my profiles!</div>
                            <div className="spacer-v"></div>
                            <Button className="pr-button github" variant="text" 
                            endIcon={<GitHubIcon className="githubIcon"/>}
                            onClick={this.githubButtonClicked}>
                                Github
                            </Button>
                            <Button className="pr-button linkedin" variant="contained" 
                            endIcon={<LinkedInIcon />}
                            onClick={this.linkedinButtonClicked}>
                                Linkedin
                            </Button>
                            <Button className="pr-button medium" variant="contained" endIcon={<BookIcon/>} onClick={this.mediumButtonClicked}>
                                Medium
                            </Button>
                        
                    </div>
                    
                </div>
                

            </div>
        )
    }

    githubButtonClicked = () => {
        const url = "https://github.com/github-prathma/"
        window.open(url, '_blank');
    }

    linkedinButtonClicked = () => {
        const url = "https://www.linkedin.com/in/prathmarastogi/"
        window.open(url, '_blank');
    }

    mediumButtonClicked = () => {
        const url = "https://medium.com/@Prathma"
        window.open(url, '_blank');
    }
}
export default SocialProfile;