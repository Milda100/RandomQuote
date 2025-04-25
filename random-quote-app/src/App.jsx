import './App.css';
import { Card, Container } from "react-bootstrap";
import Quote from "./Components/Quote"
import ShareIcons from './Components/ShareIcons';


function App() {

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100 border border-danger">
          <Card id="quote-box" className="bg-warning p-4 border border-danger">
            <Card.Body>
              <Quote/>
            </Card.Body>
            <ShareIcons/>
          </Card>
      </Container>
    </>
  )
}

export default App;
