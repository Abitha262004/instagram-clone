import React, {Component} from "react";
import "./Home.css"
import MainContent from "../../MainContent/MainContent";
import NavBar from "../../NavBar/NavBar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <NavBar/>
                <MainContent/>
            </div>
            
        );
    }
}

export default Home;