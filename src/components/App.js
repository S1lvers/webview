import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./view/Header/Header";
import Layout from "./view/Layout/Layout";
import Footer from "./view/Footer/Footer";

export class App extends Component {
    render() {
        return (
            <div>
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
