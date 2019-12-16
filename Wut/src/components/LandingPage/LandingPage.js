import React, { Component } from 'react';
import axios from 'axios'
import "./LandingPage.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            value: 0
        }
        this.sendScore = this.sendScore.bind(this);

    };

    sendScore = () => {

        axios.post('/api/highscore', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    click = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };




    render() {
        return (
            <Jumbotron>
                <Card className="text-center">
                    <Card.Header as="h1">Home Page</Card.Header>
                    <Card.Text>
                        <h2>Clicked {this.state.counter} times! KEEP CLICKING!!!</h2>
                        <Button variant="light" onClick={this.click}>CLICK ME</Button>
                        <h4>The current high score is {this.state.value}</h4>
                        <Button onClick={this.sendScore}>Submit highscore</Button>
                    </Card.Text>

                </Card>
            </Jumbotron>
        );
    }
}
