import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from "../../native/Container";
import {Link} from "react-router-dom"
import config from '../../../config/config';
import {HeaderMenu} from "./HeaderMenu";
import '../../../styles/header.scss'
import MenuButton from "./MenuButton";

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className={"header"}>
                <Container className={"justify-content-between align-items-baseline"}>
                    <Link to={config.urls.home}>{"ARITO"}</Link>
                    <HeaderMenu/>
                    <MenuButton onClick={() => console.log(1)}/>
                </Container>
            </div>
        )
    }

    menu() {

    }
}

const mapStateToProps = (store) => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
