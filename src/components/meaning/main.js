import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Main.css";
function Main() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="main-container">
      <h2 className="header-text">Discover the Meaning</h2>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3" className="input-group-text">
            TYPE YOUR WORD
          </InputGroup.Text>
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            className="custom-input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </InputGroup>
        <div className="text-center">
          <Link to={`/meaning?word=${inputValue}`}>
            <Button size="lg" variant="dark" active>
              Get Meaning
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
export default Main;
