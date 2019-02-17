import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./base/Header/Header";
import Layout from "./base/Layout";
import Footer from "./base/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className={"d-flex flex-column"}>
                <Header/>
                <Layout/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (store) => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
