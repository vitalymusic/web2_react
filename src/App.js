import Nav from  './Nav';
import Card from  './components/Card/Card';
import './App.css';


function App() {
  return (
    <div className="App" id="test1">
    <Nav />  
      <h1>Hello world!!!</h1>
      <div className='cards'>
          <Card  nosaukums="Card Title 1" saturs="This is a description for the first card." attēls="https://placehold.co/250x150/" />
          <Card  nosaukums="Card Title 2" saturs="This is a description for the first card." attēls="https://placehold.co/250x150" />
          <Card  nosaukums="Card Title 3" saturs="This is a description for the first card." attēls="https://placehold.co/250x150" />
          <Card  nosaukums="Card Title 4" saturs="This is a description for the first card." attēls="https://placehold.co/250x150" />
          <Card  nosaukums="Card Title 5" saturs="This is a description for the first card." attēls="https://placehold.co/250x150" />
         
      </div>
    </div>
  );
}

export default App;
