import React, { Component } from "react";
import "./Post.css";
import  Avatar  from "@material-ui/core/Avatar";
import postimage from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/profile.jpg';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="post__container">

                <div className="post__container">
                        <Avatar className="post__image" src=""/>
                        <div className="post__username">Username</div>
                </div>
                <div>
                    <img src={postimage} width="610"/>
                </div>
                <div>

                </div>
                <div></div>

            </div>
        );
    }

}
export default Post;