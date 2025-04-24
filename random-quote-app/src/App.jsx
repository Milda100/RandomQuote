import './App.css';
import { Card, Container } from "react-bootstrap";
import Quote from "./Components/Quote"
import { useSelector } from 'react-redux';


function App() {

  const quote = useSelector((state) => state.quote.quote);
  const author = useSelector((state) => state.quote.author);

  
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100 border border-danger">
          <Card id="quote-box" className="bg-warning p-4 border border-danger">
            <Card.Body>
              <Quote/>
            </Card.Body>
            <div id="share-icons" className="mt-3 d-flex justify-content-center gap-3">
              <a id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
                target="_blank"
                rel="noopener noreferrer"
              ><i className="bi bi-twitter-x"></i></a>
              <a 
                id="face-quote"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
              ><i className="bi bi-facebook"></i></a>
              <a 
                id="linked-quote"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
              ><i className="bi bi-linkedin"></i></a>
            </div>
          </Card>
      </Container>
    </>
  )
}

export default App;
