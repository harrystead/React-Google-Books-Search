import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import CardList from "../components/Card";
import { Alert } from "react-bootstrap";
import { set } from "mongoose";

export default function Search() {
  const [books, setBooks] = useState();
  const [query, setQuery] = useState("");
  const [success, setSuccess] = useState("");

  const changeSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.googleBooks(query).then((response) => {
      if (response.data.items === "error") {
        throw new Error(response.data.items);
      } else {
        let results = response.data.items;
        results = results.map((result) => {
          result = {
            key: result.id,
            id: result.id,
            title: result.volumeInfo.title,
            authors: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks,
            link: result.volumeInfo.infoLink,
          };
          return result;
        });
        setBooks(results);
      }
    });
  };

  const saveBook = (event) => {
    let savedBook = books.filter((book) => book.id === event.target.id);
    API.saveBook(savedBook)
      .then((response) =>
        response.status === 201
          ? setSuccess("book successfully saved.")
          : setSuccess("")
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div className="search-div">
      <Jumbotron>
        <div className="google-search-intro">
          <h2>Google Books Search</h2>
          <h5>Search and Save a Book of Interest</h5>
        </div>
        <div className="input-form">
          <form>
            <div className="input-div">
              <Input
                name="search"
                className="input-search"
                onChange={changeSearch}
                placeholder="Search books..."
              ></Input>
              <FormBtn className="btn-form" onClick={handleFormSubmit}>
                Search
              </FormBtn>
            </div>
          </form>
        </div>
      </Jumbotron>
      <div className="results-div">
        {success && <Alert variant="success">{success}</Alert>}
        <div>
          <h4 className="results-heading">Results</h4>
        </div>
        <CardList books={books} saveBook={saveBook} />
      </div>
    </div>
  );
}
