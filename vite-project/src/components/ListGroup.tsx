function ListGroup() {
  var items = ["New Delhi", "Tokyo", "Saint Lopez", "L.A.", "California"];

  return (
    <>
      <h1>Bucket List</h1>
      {items.length == 0 && <p>No Values Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
