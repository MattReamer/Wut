import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import Card from 'react-bootstrap/Card'
import './register.css'
import axios from 'axios'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };

    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        axios.post("/api/users/register", newUser)

        console.log(newUser);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="signup-container">
                <Card className="signup-card">
                    <Card.Header>
                        <h2>Register</h2>
                    </Card.Header>
                    <Card.Text>
                        <Form className="signup-form" onSubmit={this.onSubmit}>
                            <Col>
                                <FormGroup>
                                    <FormLabel>Username</FormLabel>
                                    <Form.Control autoFocus
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={errors.name}
                                        id="name"
                                        type="text"
                                        placeholder="Enter email" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <FormLabel>Email</FormLabel>
                                    <Form.Control autoFocus
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="text"
                                        placeholder="Enter email" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password" />
                                </FormGroup>
                            </Col>
                            <Button size="lg" block className="mt-4" type="submit" >Register</Button>
                            <div className="text-center mt-2">
                                <p> Already have an account? <a href="/login">Sign in</a></p>
                            </div>
                        </Form>
                    </Card.Text>
                </Card>
            </div>
        );
    }

}