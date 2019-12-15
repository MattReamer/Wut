import React, { Component, Fragment } from 'react';
import axios from 'axios'
import Questions from './Questions.js';

import { BarLoader } from 'react-spinners';

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false
        }


    };

    componentDidMount(){
        this.setState({ loading: false });
    }

    render() {

        const {error, loading, images} = this.state

        if(error){
            return <p>error.message</p>
        }

        if(loading){
            return <BarLoader height={4} width={100}></BarLoader>
        }

        //Question would take an ID that would be assigned to each question
        return (
            <Questions></Questions>
        );
    }
}

export default TestPage;
