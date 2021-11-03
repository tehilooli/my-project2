import React, { Component } from 'react';
import BooksRecommendations from './BooksRecommendations';
import ContactUs from './ContactUs';
import OpeningHours from './OpeningHours';

export default class HomePage extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            currentPage: "homePage",
        }
    }

    handleClick(event) {
        event.preventDefault();
        alert(event.target.value);
        this.setState({
            currentPage: event.target.value,
        });
    };

    render() {
        if (this.state.currentPage === "homePage") {
            return (
                <div>
                    <h1>Petach Tikva Library</h1>
                    <br></br>
                    <h3>"A room without books is like a body without a soul."</h3>
                    <h4>Marcus Tullius Cicero</h4>
                    <br></br>
                    <br></br>
                    <div className="buttonList">
                        <button className="homeButton" value="openingHours" onClick={(e) => this.handleClick(e)}>Opening Hours</button>
                        <button className="homeButton" value="booksRecommendations" onClick={(e) => this.handleClick(e)}>Books Recommendations</button>
                        <button className="homeButton" value="contactUs" onClick={(e) => this.handleClick(e)}>Contact Us</button>
                    </div>
                    

                </div>
            );
        }
        else if (this.state.currentPage === "openingHours") {
            return (<div><OpeningHours></OpeningHours></div>);
        }
        else if (this.state.currentPage === "booksRecommendations") {
            return (<div><BooksRecommendations></BooksRecommendations></div>);
        }
        else if (this.state.currentPage === "contactUs"){
            return (<div><ContactUs></ContactUs></div>);
        }
    }
}