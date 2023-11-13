import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <span></span>
      {items.length > 0 ? (
        <p> Records Found!! </p>
      ) : (
        <p> No Records Found!! </p>
      )}{" "}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item d-flex justify-content-between align-items-center active"
                : "list-group-item d-flex justify-content-between align-items-center"
            }
          >
            {item}
            <br></br> User Name: <br></br> Ratings: <br></br> Reviews: <br></br>{" "}
            Next Read:
            <span className="badge bg-primary rounded-pill">3 days ago</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
