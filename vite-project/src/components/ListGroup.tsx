function ListGroup() {
  const items = ["New Delhi", "Tokyo", "Saint Lopez", "L.A."];

  return (
    <>
      <h1>Bucket List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
