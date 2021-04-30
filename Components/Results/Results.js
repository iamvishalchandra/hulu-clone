import { Thumbnail } from "../Thumbnail/Thumbnail";
import FlipMove from "react-flip-move";
import styles from "./Results.module.scss";
export const Results = ({ results }) => {
  return (
    <FlipMove className={styles.results}>
      {results.map((result) => (
        <Thumbnail key={result.id} id={result.id} result={result} />
      ))}
    </FlipMove>
  );
};
