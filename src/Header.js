import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'
import Tooltip from '@material-ui/core/Tooltip';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
   
    const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const history = useHistory()

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout())
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }



    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                {!user ? <p>Become a Host</p> : user.email }
                <Tooltip title="Become a Host">
                <LanguageIcon style={{color:"#FF5A5F"}}/>
                </Tooltip>
                <Tooltip title="More">
                <ExpandMoreIcon />
                </Tooltip>

                {!user ? (
                    <Tooltip title="Sign In">
                        <Avatar onClick={() => history.push('/login')} style={{backgroundColor:"#FF5A5F"}}>
                            <EmojiPeopleIcon />
                        </Avatar>
                    </Tooltip>
                ) : (
                    <Tooltip title="Sign Out">
                <Avatar onClick={logoutOfApp} style={{backgroundColor:"#FF5A5F"}}>
               <ExitToAppIcon />
                </Avatar>
                </Tooltip>
                )}
               
            </div>
        </div>
    )
}

export default Header
