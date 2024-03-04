import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {

    /*Array of words that go in Navbar*/
    const links = [
        'Navbar',
        'Home',
        'About',
        'Contact'
    ];

  return (
      <div className='App'>
          <Navbar links={links} />
          <h1>CS 230L</h1>
          <h2>Section - 01</h2>
          <p>WVU ID: 800391794</p>
          <p>Hi I am Hayden Chapman</p>
          <div className="card-container">
             <Card title="Card 01" color="blue">
                Some quick example text to build on the card title and make up the bulk of the card's content.
             </Card>
             <Card title="Card 02" color="red">
                Some quick example text to build on the card title and make up the bulk of the card's content.
             </Card>
             <Card title="Card 03" color="green">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card>
          </div>
    </div>
  );
}

export default App;
