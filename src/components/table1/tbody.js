import React from "react";

function Tbody(props) {
  return (
    <tr>
      <td>{props.p.Qyteti}</td>
      <td>{props.p.Konfirmuar}</td>
    </tr>
  );
}
export default Tbody;
