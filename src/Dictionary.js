import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState();
  const [showError, setShowError] = useState(false);

  function handleResponse(response, event) {
    setResults(response.data[0]);
    setShowError(false);
    event.target.reset();
  }

  function handleError() {
    setShowError(true);
    setResults();
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then((response) => handleResponse(response, event))
      .catch(handleError);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          autoFocus={true}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
      </form>
      {showError && (
        <div className="Results-error">
          The word was not be found, please try again! 🧐
        </div>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
