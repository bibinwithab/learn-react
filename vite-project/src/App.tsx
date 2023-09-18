import ListGroup from "./components/ListGroup";

function App() {

  let items = [
    "New Delhi",
    "Tokyo",
    "Saint Lopez",
    "L.A.",
    "California",
    "Boston",
  ];
  
  return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;