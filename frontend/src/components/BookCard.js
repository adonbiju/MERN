import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    
    const  book  = props.book; 
    //console.log(book)

    return(
        <div className="card-container">
           <Link to={`/show-book/${book._id}`}> 
        <img src="https://m.media-amazon.com/images/I/516Ied32+cL.jpg"width={250} height={300} alt="" />
        </Link>
        <div className="desc">
            <h2>
                    { book.title }
            </h2>
            <h3 >{book.author}</h3>
            <p>{book.description}</p>
        </div>
       
    </div>
  
    )
};

export default BookCard;