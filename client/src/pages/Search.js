import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import CardList from "../components/Card";

export default function Search() {
  const [books, setBooks] = useState();
  const [query, setQuery] = useState("");

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
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="search-div">
      <Jumbotron>
        <div className="google-search-intro">
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
      <CardList books={books} saveBook={saveBook}/>
    </div>
  );
}
