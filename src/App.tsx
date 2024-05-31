import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectedItem={() => items}
      ></ListGroup>
    </div>
  );
}
