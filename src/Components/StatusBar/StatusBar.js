import React, {Component} from "react";
import "./StatusBar.css";
import  Avatar  from "@material-ui/core/Avatar";
import statusimg from 'C:/Users/ssc/Desktop/instagram-cl/instgram-cl/src/Components/LoginPage/images/profile.jpg';


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <div className="statusbar__container">
                    <div className="status">
                        <Avatar className='statusbar__status' src={statusimg}/>
                        <div className="statusbar__text">Abitha</div>
                    </div>
                    <div className="status">
                        <Avatar className='statusbar__status' src={statusimg}/>
                        <div className="statusbar__text">Abitha</div>
                    </div>
                    <div className="status">
                        <Avatar className='statusbar__status' src={statusimg}/>
                        <div className="statusbar__text">Abitha</div>
                    </div>
                    <div className="status">
                        <Avatar className='statusbar__status' src={statusimg}/>
                        <div className="statusbar__text">Abitha</div>
                    </div> <div className="status">
                        <Avatar className='statusbar__status' src={statusimg}/>
                        <div className="statusbar__text">Abitha</div>
                    </div>
                    <div className="status">
                        <Avatar className='statusbar__status' src={statusimg}/>
                        <div className="statusbar__text">Abitha</div>
                    </div>

                </div>
            </div>
        );
    }
    
}
export default StatusBar;