import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const ResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
