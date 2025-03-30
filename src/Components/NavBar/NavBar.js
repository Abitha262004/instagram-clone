import React, {Component} from "react";
import "./NavBar.css"
import Grid from "@material-ui/core/Grid";
import insta_logo  from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/logo2.png';
import home from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/home.jpg';
import message from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/msg.png';
import find from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/find.png';
import react from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/react.png';
import  Avatar  from "@material-ui/core/Avatar";
import dp from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/profile.jpg';
 
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
          <div>
            <div className="navbar__barContent">
                <Grid container>

                    <Grid item xs={2}>

                    </Grid>

                    <Grid item xs={3}>
                        <img className="navbar_logo" src={insta_logo} width="105px"/>
                    </Grid>

                    <Grid item xs={3}>
                  </Grid>
                  <input type="text" className="navbar__searchBar" placeholder="Search"/>
                 <Grid item xs={3} style={{"display": "flex"}}>
                    <img className="navbar__img" src={home} width="25px"/>
                    <img className="navbar__img" src={message} width="25px"/>
                    <img className="navbar__img" src={find} width="25px"/>
                    <img className="navbar__img" src={react} width="25px"/>
                    <Avatar src={dp} className="navbar__img" style={{"maxHeight": "30px", "maxWidth":"30px"}}/>
                 </Grid>
                 <Grid item xs={1}></Grid>
                </Grid>
            </div>
          </div>
        );
    }
}

export default NavBar;