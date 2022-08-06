import React ,{useState,useEffect} from 'react'
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';


function ShowBookDetails() {
  
  const [bookDetail,setbookDetail]=useState('')
  const location = useLocation();
  const navigate= useNavigate()
  let bookId = location.pathname.replace('/show-book/', '')
  useEffect(() => {
    axios.get('http://localhost:8082/api/books/'+bookId)
    .then(function (response) {
      //console.log(response.data)
      //setbookDetail(response.data)
     setbookDetail(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])
  
 

  const onDeleteClick=()=>{
    axios
    .delete('http://localhost:8082/api/books/'+bookId)
    .then(res => {
      navigate('/')
    })
    .catch(err => {
      console.log("Error form ShowBookDetails_deleteClick");
    })

  }

  return (
    <div className="ShowBookDetails">
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <br /> <br />
          <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
        </div>
        <br />
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Book Details</h1>
          <p className="lead text-center">
              View Book's Info
          </p>
          <hr /> <br />
        </div>
      </div>


      <div>
      
      <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ bookDetail.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ bookDetail.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ bookDetail.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ bookDetail.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ bookDetail.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ bookDetail.description }</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>

      
      <div className="row">
        <div className="col-md-6">
          <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeleteClick}>Delete Book</button><br />
        </div>

        <div className="col-md-6">
        <Link to={`/edit-book/${bookId}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
          </Link>
          <br />
        </div>

      </div>

    </div>
  </div>
  )
}

export default ShowBookDetails


