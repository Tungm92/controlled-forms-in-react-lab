import { useState } from 'react'

const initialState = {
  title: '',
  author: ''
};

const Bookshelf = () => {
  
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook(initialState);
  };
  
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input 
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label htmlFor="author">Author: </label>
            <input 
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type="submit">Submit book</button>
          </form>
      </div>
      {books.map((book, idx) => (
        <div className="bookCardsDiv" key={idx}>
          <p>"{book.title}" by {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;