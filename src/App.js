import Nav from  './Nav';
import Card from  './components/Card/Card';
import './App.css';


function App() {
    const produkti = [
  {
    nosaukums: "Ābolu sula",
    saturs: "100% dabīga ābolu sula bez pievienota cukura.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Rudzu maize",
    saturs: "Tradicionāla Latvijas rudzu maize, cepta krāsnī.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Medus burka",
    saturs: "Bioloģiski ievākts Latvijas pļavu ziedu medus.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Zemeņu ievārījums",
    saturs: "Mājās gatavots zemeņu ievārījums ar mazāk cukura.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Siers ar ķimenēm",
    saturs: "Mīksts siers ar ķimenēm, ideāli der uzkodu platei.",
    attels: "https://placehold.co/250x150/"
  }
];

  


  return (
    <div className="App" id="test1">
    <Nav />  
      <h1 >Hello world!!!</h1>
      <div className='cards'>

          {produkti.map((item,i)=>{
              return(
                <Card  nosaukums={item.nosaukums} saturs={item.saturs} attēls={item.attels} key={i}   />
              )
          })}
      </div>
    </div>
  );
}

export default App;
