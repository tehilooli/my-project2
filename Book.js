import React, { Component } from 'react';

export default class Book extends Component {

    render() {
        if(this.props.bookName === 'harryPotter') {
            return (
                <div>
                    <h2>Harry potter and the Prisoner of Azkaban - Book Review</h2>
                    <h4>
                    Harry Potter and the Prisoner of Azkaban is the third instalment in the Harry Potter series, 
                    and is by the incomparable JK Rowling. The Harry Potter series are described as 'children books', however, 
                    in my opinion, whether you're twelve or twenty two, I highly recommend them!!

                    Now after a long summer (and some aunt abusing antics), Harry is back at Hogwarts School of Witchcraft and Wizardry, 
                    with his trusty best friends: Ron and Hermione. Yet, secret and mysterious things are happening in the wizarding world, 
                    and Harry is not safe from the dark and dangerous people at large. Who is the infamous Sirius Black, who escaped from the notorious wizard prison: Azkaban? And what could the fugitive Black possibly want with Harry? Harry, Ron and Hermione, spend another magical year at Hogwarts, where Harry learns far more about his past then he could have expected.

                    As always with Rowling's books, I loved Harry Potter and the Prisoner of Azkaban! JK Rowling's words have a curious 
                    habit of coming to life, and her characters are funny, and realistic. One of the greatest things about Harry Potter, 
                    is that they improve with each book, and you can clearly glimpse the clever, intricate plot Rowling has wove, 
                    with cleverly placed foreshadowing and seemingly innocent hints.

                    This book is undoubtedly darker than the previous ones, as Harry learns more and more about the sinister forces that 
                    threaten the wizarding world. The characters begin to get more developed and more complex, and an awful lot more 
                    interesting. I must warn you though, that once you begin, you'll find it almost impossible to stop! Once you finish, 
                    you'll be skimming through it again, finding seemingly obvious clues, thinking 'How did I miss that?!'. If that wasn't 
                    enough to get you interested, the Harry Potter covers have recently been redesigned, and they are even more stunning than 
                    ever! The Prisoner of Azkaban cover is by far my favourite: Harry heroically brandishing a wand, from which a silver stag 
                    has erupted! To no one's surprise, I give Harry Potter and the Prisoner of Azkaban 5/5 stars!
                    </h4>
                </div>
            );
        }
        else if(this.props.bookName === "warAndPeace") {
            return (
                <div>
                    <h2>War and Peace - Book Review</h2>
                </div>
            );
        }
        else if(this.props.bookName === "theLordOfTheRings") {
            return (
                <div>
                    <h2>The Lord of the Rings - Book Review</h2>
                </div>
            );
        }
        else { 
            return (
                <div>
                    <h2>The Golden Compass - Book Review</h2>
                </div>
            );
        }
    }
}