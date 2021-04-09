import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Saved from "../components/Saved";

export default function Save() {
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    API.getBooks()
      .then((response) => setSavedBooks(response.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteBook = (event) => {
    const id = event.target.id;
    API.deleteBook(id)
      .then((deleted) => console.log(deleted))
      .then((err) => console.log(err));
    
      window.location.reload();
  };

  return (
    <div className="saved-page">
      <div className="saved-heading">
        <h3>Saved Books</h3>
      </div>
      {console.log(savedBooks)}
      <div>
        <Saved savedBooks={savedBooks} deleteBook={deleteBook} />
      </div>
    </div>
  );
}
