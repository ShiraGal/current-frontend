import "./PopupAddGig.css";
import { useRef, useContext } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { StoreCtxt } from "../../services/StoreService";

function PopupAddGig(props) {
  const { user, gigs } = useContext(StoreCtxt).states;
  const { getMyGigs, addNewGig } = useContext(StoreCtxt).actions;
  const userId = props.userId;
  const date = useRef();
  const client = useRef();
  const details = useRef();
  const payment = useRef();

  const submitGig = (e) => {
    e.preventDefault();
    if (!date.current.value) {
      console.log(date.current.value);
    }
    const gigData = {
      date: date.current.value,
      client: client.current.value,
      details: details.current.value,
      payment: payment.current.value,
    };

    console.log(gigData.payment);

    addNewGig(userId, gigData);
    getMyGigs();
  };

  return (
    <>
      <Form onSubmit={submitGig} className="shira-popup-form">
        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
          <Form.Label column sm="2">
            תאריך:
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={date} name="date" type="date" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
          <Form.Label column sm="2">
            הלקוח:
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={client} name="client" type="text" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label column sm="2">
            תיאור:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              ref={details}
              name="details"
              type="text"
              as="textarea"
              rows={3}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
          <Form.Label column sm="2">
            סכום לתשלום:
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={payment} name="payment" type="Number" />
          </Col>
        </Form.Group>

        <Button type="submit" value="Send" className="shira-button">
          הכנס גיג!
        </Button>
      </Form>
    </>
  );
}

export default PopupAddGig;
