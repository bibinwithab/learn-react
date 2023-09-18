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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
