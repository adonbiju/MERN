import React ,{useState,useEffect}  from 'react';
import { Link ,useNavigate,useLocation,} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateBookInfo() {
  
  const navigate= useNavigate()
  
  const [title,settitle]=useState('')
  const [isbn,setisbn]=useState('')
  const [author,setauthor]=useState('')
  const [description,setdescription]=useState('')
  const [published_date,setpublished_date]=useState('')
  const [publisher,setpublisher]=useState('')
  


  const location = useLocation();
  let bookId = location.pathname.replace('/edit-book/', '')
  useEffect(() => {
    axios.get('http://localhost:8082/api/books/'+bookId)
    .then(function (response) {
      //console.log(response.data)
      //setbookDetail(response.data)
     settitle(response.data.title)
     setisbn(response.data.isbn)
     setauthor(response.data.author)
     setdescription(response.data.description)
     setpublished_date(response.data.published_date)
     setpublisher(response.data.publisher)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])


  const handlesubmit=(e)=>{
    e.preventDefault() 
    const data = {
      title: title,
      isbn: isbn,
      author: author,
      description:description,
      published_date: published_date,
      publisher: publisher
    }
  
    axios.put('http://localhost:8082/api/books/'+bookId, data)
  .then(function (response) {
    console.log(response);
    navigate('/')
  })
  .catch(function (error) {
    console.log(error);
  })
  }

  return (
    <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form  onSubmit={handlesubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                name='title'
                className='form-control'
                value={title}
                onChange={(e)=>settitle(e.target.value)}
              />
            </div>
            <br />

           <div className='form-group'>
            <label htmlFor="isbn">ISBN</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={isbn}
                onChange={(e)=>setisbn(e.target.value)}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={author}
                onChange={(e)=>setauthor(e.target.value)}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={description}
                onChange={(e)=>setdescription(e.target.value)}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={published_date}
                onChange={(e)=>setpublished_date(e.target.value)}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={publisher}
                onChange={(e)=>setpublisher(e.target.value)}
              />
            </div> 

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
  )
}

export default UpdateBookInfo