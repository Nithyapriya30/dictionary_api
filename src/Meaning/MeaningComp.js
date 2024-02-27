import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Breadcrumb, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

function MeaningComp() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const word = searchParams.get("word");
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const [Dictdata, setDictdata] = useState(null);
  const [Image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [wordNotFound, setWordNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
        };
        const response = await axios.get(url, options);
        setDictdata(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setWordNotFound(true);
        setIsLoading(false);
      }
    };

    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${word}&per_page=1`,
          {
            headers: {
              Authorization:
                "YpkmDQ8PDR3I3ml8Jlco6yuUejeGP4TGcK5aHij1ry6oFHv4jH6VX5XH",
            },
          }
        );
        if (response.data.photos.length > 0) {
          setImage(response.data.photos[0].src.medium);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
    fetchData();
    
  }, [url, word]);

  return (
    <div>
      <Header />
      <Container>
        <Link to="/">
          <Breadcrumb className="mt-5">
            <Breadcrumb.Item href="#" as={Link} to="/" active>
              Home
            </Breadcrumb.Item>

              <Breadcrumb.Item >{word}</Breadcrumb.Item>
          </Breadcrumb>
        </Link>

        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" role="status" className="mt-3">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : wordNotFound ? (
          <div className="mt-3 text-center">
            <div className="alert alert-danger" role="alert">
              The word you've entered isn't in the dictionary. Please try again.
            </div>
          </div>
        ) : Dictdata ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <Card style={{ width: "45rem" }} className="mt-0">
              {Image && (
                <Card.Img
                  variant="top"
                  src={Image}
                  alt="Image"
                  style={{ height: "200px" }}
                />
              )}
              <Card.Body>
                {Dictdata[0].meanings && (
                  <Card.Title style={{ textTransform: "capitalize" }}>
                    {renderDictionaryField(
                      "Part Of Speech",
                      Dictdata[0].meanings[0]?.partOfSpeech
                    )}
                    {renderDictionaryField(
                      "Definition",
                      Dictdata[0].meanings[0]?.definitions?.[0]?.definition
                    )}
                    {renderDictionaryField(
                      "Synonyms",
                      Dictdata[0].meanings[0]?.synonyms?.join(", ")
                    )}
                    {renderDictionaryField(
                      "Antonyms",
                      Dictdata[0].meanings[0]?.antonyms?.join(", ")
                    )}
                    {renderDictionaryField(
                      "Example",
                      Dictdata[0].meanings[0]?.definitions?.[0]?.example
                    )}
                  </Card.Title>
                )}
              </Card.Body>
            </Card>
          </div>
        ) : null}
      </Container>
    </div>
  );
}

const renderDictionaryField = (label, data) =>
  data && (Array.isArray(data) ? data.length > 0 : true) ? (
    <p>
      <b>{label}: </b>
      {Array.isArray(data) ? data.toString() : data}
    </p>
  ) : null;
export default MeaningComp;

