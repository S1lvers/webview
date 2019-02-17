import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from "../../native/Container";
import {Link} from "react-router-dom"


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <Container>
                content here
            </Container>
        )
    }
}

const mapStateToProps = (store) => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
