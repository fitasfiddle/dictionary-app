import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results }) {
  return (
    <div className="Results">
      <section className="Results-word">
        <h1>{results.word}</h1>
        {results.phonetics && results.phonetics.length>0 && <p>{results.phonetics[0].text}</p>}
      </section>
      {results.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
