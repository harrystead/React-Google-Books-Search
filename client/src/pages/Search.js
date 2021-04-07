import React, { useState, useEffect } from "react";
import CardList from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API"
import { Card, Button } from "react-bootstrap";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const changeSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
      event.preventDefault();
      API.googleBooks(query)
      .then(response => setBooks(response.data.items));
  }

  useEffect(() => {
      console.log(books)
  }, [books])

  return (
    <div className="search-div">
      <Jumbotron>
        <div>
          <h2>Google Books Search</h2>
          <h4>Search and Save a Book of Interest</h4>
        </div>
        <div className="input-form">
          <form>
            <Input
              name="search"
              onChange={changeSearch}
              placeholder="Search books..."
            ></Input>
            <FormBtn className="btn-form" onClick={handleFormSubmit}>
              Search
            </FormBtn>
          </form>
        </div>
      </Jumbotron>
      {books && books.map(book => (
                <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                  <Card.Text>
                    {book.volumeInfo.description}
                  </Card.Text>
                  <Button variant="primary">Save</Button>
                </Card.Body>
      ))}
      <CardList/>
    </div>
  );
}
