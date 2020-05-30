import React from "react";

function Tbody(props) {
  return (
    <tr>
      <td>{props.p.state}</td>
      <td>{props.p.active}</td>
    </tr>
  );
}
export default Tbody;
