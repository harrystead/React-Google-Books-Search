import React from 'react';
import { Card, Button } from "react-bootstrap";

export default function Saved({savedBooks, deleteBook}) {
    return (
        <>
        {savedBooks &&
          savedBooks.map((book) => (
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
                      className="button-view"
                      variant="success"
                      href={book.link}
                    >
                      View
                    </Button>
                    <Button
                      id={book._id}
                      onClick={deleteBook}
                      className="button-delete"
                      variant="danger"
                    >
                      Delete
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
      </>
    )
}
