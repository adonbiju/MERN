import React ,{useState}  from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
function CreateBook() {

  const navigate= useNavigate()
  const [title,settitle]=useState('')
  const [isbn,setisbn]=useState('')
  const [author,setauthor]=useState('')
  const [description,setdescription]=useState('')
  const [published_date,setpublished_date]=useState('')
  const [publisher,setpublisher]=useState('')

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
  
    axios.post('http://localhost:8082/api/books', data)
  .then(function (response) {
   // console.log(response);
    navigate('/')
  })
  .catch(function (error) {
    console.log(error);
  })
  }
  return (
    <div className="CreateBook">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <br />
          <Link to="/" className="btn btn-outline-warning float-left">
              Show BooK List
          </Link>
        </div>
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Add Book</h1>
          <p className="lead text-center">
              Create new book
          </p>

          <form onSubmit={handlesubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                required
              />
            </div>
            <br />

            <div className='form-group'>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={isbn}
                onChange={(e)=>setisbn(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={author}
                onChange={(e)=>setauthor(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={description}
                onChange={(e)=>setdescription(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={published_date}
                onChange={(e)=>setpublished_date(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={publisher}
                onChange={(e)=>setpublisher(e.target.value)}
                required
              />
            </div>

            <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
            />
          </form>
      </div>
      </div>
    </div>
  </div>
  )
}

export default CreateBook