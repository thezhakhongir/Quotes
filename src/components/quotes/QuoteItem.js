import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <>
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>
        <Link
          style={{
            alignSelf: "center",
            padding: "0.8rem",
            backgroundColor: "#5f5e5e",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
          }}
          to={`/quotes/${props.id}`}
        >
          View Fullscreen
        </Link>
      </li>
    </>
  );
};

export default QuoteItem;
