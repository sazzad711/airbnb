import React from 'react'
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';




const Footer = () => {
    return (
        
        <div className="copyright">
            
            <img
              src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
              alt='Airbnb Logo'
            />
            
            <div >
            
                
            <FacebookIcon style={{fontSize: "40px"}} className="copyright__icon"/>
            <InstagramIcon style={{fontSize: "40px"}} className="copyright__icon" />
            <TwitterIcon style={{fontSize: "40px"}} className="copyright__icon" />
            <YouTubeIcon style={{fontSize: "40px"}} className="copyright__icon"/>
            <PinterestIcon style={{fontSize: "40px"}} className="copyright__icon" />
  
            <LinkedInIcon style={{fontSize: "40px"}} className="copyright__icon"/>
                
                
            </div>
        Copyright © by {new Date().getFullYear()} Airbnb Inc.
        
        
        
        </div>
    )
}

export default Footer;
