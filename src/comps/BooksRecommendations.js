import React, { Component } from 'react';
import Book from './Book';

export default class BooksRecommendations extends Component {

    constructor() {
        super();
        this.handleBookClick = this.handleBookClick.bind(this);
        this.state = {
            currentBookPage: "booksList",
        }
    }

    handleBookClick(event) {
        event.preventDefault();
        alert(event.target.id);
        this.setState({
            currentBookPage: event.target.id,
        });
    }

    render() {
        if(this.state.currentBookPage === "booksList") {
            return(
                <div>
                    <h2>Recommendations of the Month</h2>
                    <a 
                        href="/harryPotter" 
                        id="harryPotter" 
                        onClick={(e) => this.handleBookClick(e)}>
                        Harry Potter and the Prisoner of Azkaban by J.K. Rowling
                    </a>
                    <br></br>
                    <a 
                        href="/warAndPeace" 
                        id="warAndPeace" 
                        onClick={(e) => this.handleBookClick(e)}>
                        War and Peace by Leo Tolstoy
                    </a>
                    <br></br>
                    <a 
                        href="/theLordOfTheRings" 
                        id="theLordOfTheRings" 
                        onClick={(e) => this.handleBookClick(e)}>
                        The Lord of the Rings by J.R.R. Tolkien
                    </a>
                    <br></br>
                    <a 
                        href="/theGoldenCompass" 
                        id="theGoldenCompass" 
                        onClick={(e) => this.handleBookClick(e)}>
                        The Golden Compass by Philip Pullman
                    </a>
                </div>
            );
        }
        else return (<div><Book bookName={this.state.currentBookPage}></Book></div>);
    }
}