import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardList({ books, saveBook}) {
  return (
    <>
      {books && books.length > 0 ?
        books.map((book) => (
          <Card key={book.key}>
            <Card.Body>
              <div className="section-book">
                <div>
                  <Card.Title style={{ fontSize: "24px" }}>
                    {book.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>
                    Written by {books.authors > 0 ? books.authors[0] : "N/A"}
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
                  <Button
                    className="button-view"
                    variant="success"
                    href={book.link}
                  >
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
        ))
      : ""}
    </>
  );
}
