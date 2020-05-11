import React from "react";

function Tbody(props) {
  return (
    <tr>
      <td>{props.p.Qyteti}</td>
      <td>{props.p.Aktiv}</td>
    </tr>
  );
}
export default Tbody;
