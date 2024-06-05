import ListGroup from "./components/ListGroup/index";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectedItem={() => {}} />
    </div>
  );
}

export default App;
