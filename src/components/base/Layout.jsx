import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Main} from "./layouts/Main";

export class Layout extends Component {
    render() {
        return (
            <div className={"d-flex"}>
                <Router>
                    <Switch>
                        <Route exact path={"/"} component={Main}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (store) => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
