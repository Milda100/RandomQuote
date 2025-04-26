import './App.scss';
import Card from "react-bootstrap/Card";
import Quote from "./Components/Quote"
import ShareIcons from './Components/ShareIcons';



function App() {

  return (
    <>
      <div id="container" className="d-flex justify-content-center align-items-center vh-100">
          <Card id="quote-box" className="p-4">
            <Card.Body>
              <Quote/>
            </Card.Body>
            <ShareIcons/>
          </Card>
      </div>
    </>
  )
}

export default App;
