import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import Card from 'react-bootstrap/Card'
import './login.css'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className='login-container'>
                <Card className="login-card">
                    <Card.Header>
                        <h2>Sign In</h2>
                    </Card.Header>
                    <Card.Text>
                        <Form className="login-form">
                            <Col>
                                <FormGroup>
                                    <FormLabel>Email</FormLabel>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </FormGroup>
                            </Col>
                            <Button size="lg" block className="mt-4" >Log in</Button>
                            <div className="text-center pt-3 ">
                                Or continue using Social Media account
                    </div>
                            <div class="btn-group btn-group-justified">
                                <Button className="mt-3">Facebook</Button>
                                <Button className="mt-3">Github</Button>
                                <Button className="mt-3">Twitter</Button>
                            </div>
                            <div className="text-center mt-2">
                                <a href="/register">Sign up</a>
                                <span className='p-2'>|</span>
                                <a href="/forgot">Forgot Password</a>
                            </div>
                        </Form>
                    </Card.Text>
                </Card>
            </div>
        );
    }

}