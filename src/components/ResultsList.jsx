import React from "react";
import ResultCard from "./ResultCard";

export default function ResultsList({ results, searchEntry, category }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {results && <p>Showing results for '{searchEntry}': </p>}

          {results.map(result => {
            return (
              <>
                <ResultCard
                  result={result}
                  category={category}
                  key={result.name}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
