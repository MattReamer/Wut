import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'

import "./About.css";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ''
        }


    }

    componentDidMount() {
        console.log("component did mount")
        this.callBackendAPI()
            .then(res => this.setState({ status: res.express }))
            .catch(err => console.log(err));

    }

    callBackendAPI = async () => {
        const response = await fetch('/api/about');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        console.log(body)
        return body

    };
    render() {
        return (
            <Jumbotron>
                <Card className="text-center">
                    <Card.Header as="h1">About Page</Card.Header>
                    <Card.Text>
                        <div>
                            <h4>testing server call</h4>
                            <div>{this.state.status}</div>
                        </div>


                    </Card.Text>

                </Card>
            </Jumbotron >
        );
    }
}