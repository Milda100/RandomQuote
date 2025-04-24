import { useSelector, useDispatch } from "react-redux";
import { setQuote } from "../Redux/Slices/quoteSlice";
import Button from "react-bootstrap/Button";

function Quote() {
  const quote = useSelector((state) => state.quote.quote);
  const author = useSelector((state) => state.quote.author);
  const dispatch = useDispatch();

  const fetchNewQuote = () => {
    fetch("https://thequoteshub.com/api/")
  .then(response => response.json())
  .then(data => {
    console.log("Fetched data:", data);
    dispatch(setQuote({ quote: data.text, author: data.author }));
  })
  .catch(error => console.error("Error fetching quote:", error));
  
  };

  return (
    <>
      <blockquote className="blockquote mb-0">
        <p id="text">{quote}</p>
        <footer className="blockquote-footer" id="author">{author}</footer>
      </blockquote>
      <Button 
        id="new-quote" 
        className="btn btn-dark mt-3"
        onClick={fetchNewQuote}
      ><i className="bi bi-chat-square-quote-fill"></i> New Quote</Button>
    </>
  );
}

export default Quote;