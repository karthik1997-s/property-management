// import { Table } from "antd";
import React from "react";
import Table from "react-bootstrap/Table";

function CornerTable() {
  const data = [
    {
      id: 1,
      corners: "A",
      latitude: 12.77066,
      Longitude: 77.54593,
    },
    { id: 2, corners: "B", latitude: 12.71293, Longitude: 77.21002 },
    { id: 3, corners: "C", latitude: 12.77061, Longitude: 77.54593 },
    { id: 4, corners: "D", latitude: 12.75066, Longitude: 76.54593 },
  ];

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Corners</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.corners}</td>
                <td>{item.latitude}</td>
                <td>{item.Longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default CornerTable;
