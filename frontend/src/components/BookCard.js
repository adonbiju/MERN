import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    
    const  book  = props.book; 
    //console.log(book)

    return(
        <div className="card-container">
           <Link to={`/show-book/${book._id}`}> 
        <img src="https://cdn.vox-cdn.com/thumbor/p-gGrwlaU4rLikEAgYhupMUhIJc=/0x0:1650x2475/1200x0/filters:focal(0x0:1650x2475):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13757614/817BsplxI9L.jpg"width={250} height={300} alt="" />
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