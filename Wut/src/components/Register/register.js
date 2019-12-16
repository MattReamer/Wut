import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import Card from 'react-bootstrap/Card'
import './register.css'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
        return (
            <div className="signup-container">
                <Card className="signup-card">
                    <Card.Header>
                        <h2>Register</h2>
                    </Card.Header>
                    <Card.Text>
                        <Form className="signup-form">
                            <Col>
                                <FormGroup>
                                    <FormLabel>Email</FormLabel>
                                    <Form.Control autoFocus type="email" placeholder="Enter email" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" />
                                </FormGroup>
                            </Col>
                            <Button size="lg" block className="mt-4" >Register</Button>
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