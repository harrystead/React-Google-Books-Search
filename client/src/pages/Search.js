import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";

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

  const viewBook = (event) => {
    console.log(event.target.id);
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
      {books &&
        books.map((book) => (
          <Card>
            <Card.Body>
              <div className="section-book">
                <div>
                  <Card.Title style={{ fontSize: "24px" }}>
                    {book.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>
                    Written by {book.authors[0]}
                  </Card.Text>
                </div>
                <div className="buttons">
                  <Button
                    id={book.id}
                    onClick={saveBook}
                    className="button-save"
                    variant="primary"
                  >
                    Save
                  </Button>
                  <Button className="button-view" variant="success" href={book.link}>
                    View
                  </Button>
                </div>
              </div>
              <div className="section-book">
                <Card.Img
                  style={{ width: "150px", height: "150px" }}
                  src={
                    book.image === undefined
                      ? "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"
                      : book.image.thumbnail
                  }
                />
                <Card.Text style={{ fontSize: "12px" }}>
                  {book.description}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}
