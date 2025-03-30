import React, { Component } from "react";
import './LoginPage.css';
import Grid from '@material-ui/core/Grid';
import inst_image from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/clone.jpg';
import insta_logo from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/logo2.png';
import fb from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/fb.png';
import appstore from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/app copy.png';

import playstore from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/goo.png';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div >

                                <img src={inst_image} width="450" />
                            </div>
                            <div>
                        </div>
                        <div className="loginpage_rightcomponent">
                            <img className="loginpage__logo" src={insta_logo} />
                        <div>
                            <div className="loginPage__signin">
                                <input className="loginpage__text" type="text" placeholder="Phone number,username or email"/>
                                <input className="loginpage__text" type="password" placeholder="Password"/>
                                <button className="login__button">Sign In</button>
                            </div>
                            <div className="login__ordiv">
                                <div className="login__dividor"></div>
                                <div className="login__or">OR</div>
                                <div className="login__dividor"></div>
                            </div>
                            <div className="login__fb">
                                <img src={fb} width="15px" style={{"marginRight": "5px" }}/>Login in with facebook</div>
                            <div className="login__forget">Forgot Password</div>
                        </div>
                       
                        <div className="loginpage__signupoption">
                            <div className="loginpage__signin">
                                Don't have an account? Sign up
                            </div>
                            <div className="loginpage__downloadSection">
                                <div>
                                Get the app.
                                </div>
                
                        <div className="loginpage__option">
                            <img className="loginpage__dwimg" src={appstore} width= "140px"/>
                            <img className="loginpage__dwimg" src={playstore} width= "140px"/>
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        
                    </Grid>
                    <Grid item xs={3}></Grid>

                </Grid>
            </div>
        )
    }
}


export default LoginPage;