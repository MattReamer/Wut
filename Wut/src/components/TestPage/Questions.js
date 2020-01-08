import React, { Component, Fragment } from 'react';
import axios from 'axios'
import "./Questions.css";
import Carousel from 'react-images';
import Card from 'react-bootstrap/Card'
import { BarLoader } from 'react-spinners';
import { Drawer } from '@material-ui/core';
import { CardDeck, Button, Container, Row, Col, Image } from 'react-bootstrap';


//Probably will use this component as a template for questions or something
class Questions extends Component {
    exampleData = {
        image: "https://m.media-amazon.com/images/I/61-SFTSayHL._SS500_.jpg",
        desc: "I ran out of gas on the freeway and all I have is a gallon of mayo, can I use this as fuel",
        title: "Is Mayo Acceptable as Fuel?",
        author: "Joe Mama",
        tags: ["Stupid Questions"]
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false
        }
    };

    componentDidMount(){
        this.setState({ loading: false });
        this.grabContent();
    }

    //Ex: Take in list of ID's passed from index page
    grabContent = async () => {
        //Query Database and get image data, content data and meta data
        //Map data result to objects here to create cards
        await this.setState({ loading: false });
    }

    toggleSidebar = () => {
        const { openSidebar } = this.state;
        openSidebar ? this.setState({ openSidebar: false}) : this.setState({ openSidebar: true}); 
    }

    render() {
    
        const {error, loading} = this.state

        if(error){
            return <p>error.message</p>
        }

        if(loading){
            return <BarLoader height={4} width={100}></BarLoader>
        }

        //Rendering a single card here, but in the future map an array of questions
        //To output all the questions for a topic
        return (
            <Container>
                {/* Drawer for question information */}
                <Drawer
                    width={'auto'}
                    anchor='left'
                    open={this.state.openSidebar}
                    onClose={this.toggleSidebar}
                >
                    {/* Populate this with information using question ID as ref */}
                    <p style={{ minWidth: '200px', textAlign: 'center'}}><strong>Hey big boy</strong></p>
                    <Image src="https://i.imgur.com/vQSQGFd.jpg" />
                </Drawer>
                <Row>
                    <Col>
                        <CardDeck style= {{ width: '80%', margin: '10%' }}>
                            <Card>
                                <Card.Header>{this.exampleData.title}</Card.Header>
                                <Card.Img variant='top' src={this.exampleData.image} />
                                <Card.Body>
                                    <Card.Title>{this.exampleData.title}</Card.Title>
                                    <blockquote className="blockquote mb-0" style= {{ textAlign: 'left' }}>
                                        <p>{this.exampleData.desc}</p>
                                        <footer className="blockquote-footer">
                                            {this.exampleData.author}
                                        </footer>
                                        <Button variant="secondary" style={{ marginTop: '10px', float: 'right' }} onClick={this.toggleSidebar}>Stats</Button>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>{this.exampleData.title}</Card.Header>
                                <Card.Img variant='top' src={this.exampleData.image} />
                                <Card.Body>
                                    <Card.Title>{this.exampleData.title}</Card.Title>
                                    <blockquote className="blockquote mb-0" style= {{ textAlign: 'left' }}>
                                        <p>{this.exampleData.desc}</p>
                                        <footer className="blockquote-footer">
                                            {this.exampleData.author}
                                        </footer>
                                        <Button variant="secondary" style={{ marginTop: '10px', float: 'right' }} onClick={this.toggleSidebar}>Stats</Button>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>{this.exampleData.title}</Card.Header>
                                <Card.Img variant='top' src={this.exampleData.image} />
                                <Card.Body>
                                    <Card.Title>{this.exampleData.title}</Card.Title>
                                    <blockquote className="blockquote mb-0" style= {{ textAlign: 'left' }}>
                                        <p>{this.exampleData.desc}</p>
                                        <footer className="blockquote-footer">
                                            {this.exampleData.author}
                                        </footer>
                                        <Button variant="secondary" style={{ marginTop: '10px', float: 'right' }} onClick={this.toggleSidebar}>Stats</Button>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Questions;
