import React from "react";
import moment from "moment";
import { useState } from "react";

const SearchResults = props => {
  const [clickedRow, setClickedRow] = useState();
  function handleClick(index) {
    console.log("clicked");
    setClickedRow(index);
  }

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">FirstName</th>
          <th scope="col">SurName</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in-date</th>
          <th scope="col">Check-out-date</th>
          <th scope="col">No. of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => (
          <tr
            key={index}
            onClick={() => handleClick(index)}
            className={clickedRow === index ? "highlight" : null}
          >
            <th scope="row">{booking.id}</th>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{CalcNumNights(booking.checkInDate, booking.checkOutDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function CalcNumNights(dateIn, dateOut) {
  let checkOutDate = moment(dateOut);
  let checkInDate = moment(dateIn);
  return checkOutDate.diff(checkInDate, "days");
}

export default SearchResults;
