import React from "react";
import { Card, Table } from "react-bootstrap";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Blog = () => {
  return (
    <div className="container text-center mt-5">
      <PageTitle title="Blog"></PageTitle>
      <Card border="primary text-white bg-info">
        <Card.Body>
          <Card.Title className="text-dark fw-bold p-3">
            Difference between javascript and nodejs
          </Card.Title>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>JAVASCRIPT</th>
                <th>NODEJS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Javascript is a programming language that is used for writing
                  scripts on the website
                </td>
                <td>NodeJS is a Javascript runtime environment.</td>
              </tr>
              <tr>
                <td>Javascript can only be run in the browsers.</td>
                <td>
                  We can run Javascript outside the browser with the help of
                  NodeJS.
                </td>
              </tr>
              <tr>
                <td>It is basically used on the client-side.</td>
                <td>It is mostly used on the server-side.</td>
              </tr>
              <tr>
                <td>Javascript is used in frontend development.</td>
                <td>Nodejs is used in server-side development.</td>
              </tr>
              <tr>
                <td>
                  It is the upgraded version of ECMA script that uses Chrome’s
                  V8 engine written in C++
                </td>
                <td>Nodejs is written in C, C++ and Javascript.</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card border="primary text-white bg-info mt-5">
        <Card.Body>
          <Card.Title className="text-dark fw-bold p-3">
            Differences between sql and nosql databases.
          </Card.Title>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>SQL</th>
                <th>NOSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                <td>Non-relational or distributed database system.</td>
              </tr>
              <tr>
                <td>
                  These databases have fixed or static or predefined schema
                </td>
                <td>They have dynamic schema</td>
              </tr>
              <tr>
                <td>
                  These databases are not suited for hierarchical data storage.
                </td>
                <td>
                  These databases are best suited for hierarchical data storage.
                </td>
              </tr>
              <tr>
                <td>These databases are best suited for complex queries.</td>
                <td>These databases are not so good for complex queries.</td>
              </tr>
              <tr>
                <td>Vertically Scalable</td>
                <td>Horizontally scalable</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card border="primary text-white bg-dark  mt-5">
        <Card.Body className="product-information">
          <Card.Title className="fw-bold">
            When should you use nodejs and when should you use mongodb
          </Card.Title>
          <Card.Text>
            Nodejs is a Javascript engine that you can write any application you
            want with (by programming in the Javascript language). It runs your
            Javascript code. Most commonly, it is used to build servers that can
            respond to web requests, though it can be used for lots of other
            types of code too. MongoDB is a database engine. Code within some
            application or server uses MongoDB to save, query or update data in
            a database. There are many web servers built with nodejs that will
            then use MongoDB for storing data. MongoDB offers an API library
            that runs within a Nodejs application to give you programmatic
            access to MongoDB so you can create databases and then add, query,
            update or delete data from the MongoDB database.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary text-white bg-dark  mt-5 mb-5">
        <Card.Body className="product-information">
          <Card.Title className="fw-bold">
            What is the purpose of jwt and how does it work
          </Card.Title>
          <Card.Text>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;