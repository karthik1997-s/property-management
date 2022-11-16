import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Card from "react-bootstrap/Card";

import CardGroup from "react-bootstrap/CardGroup";
import TextExample from "./cards";

import { Row, Col } from "antd";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,

  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const secdata = {
  labels: ["6AM", "8AM", "10AM", "2PM", "4PM", "6PM", "8PM", "10PM", "12PM"],
  datasets: [
    {
      label: "Properties ",
      data: [0, 14, 127, 45, 60, 105, 220, 10, 80, 40],
      fill: true,
      backgroundColor: "rgba(0,255,0,0.1)",
      borderColor: "rgba(0,128,0,1)",
      tension: 0.1,
      pointStyle: "rect",
    },
  ],
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

const data = {
  labels: ["6AM", "8AM", "10AM", "2PM", "4PM", "6PM", "8PM", "10PM", "12PM"],
  datasets: [
    {
      label: "Customer ",
      data: [0, 14, 127, 25, 90, 165, 22, 210, 70, 100],
      fill: true,
      backgroundColor: "rgba(0,255,0,0.1)",
      borderColor: "rgba(0,128,0,1)",
      tension: 0.1,
      pointStyle: "rect",
    },
  ],
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

function Chart() {
  const [lineData, setLinedata] = useState({
    selectedMetric: "1",
  });

  const onchange = (event) => {
    if (event.target.value === "1") {
      setLinedata(data);
    }
  };

  return (
    <>
      <div
        style={{
          background: "#fff",
          height: "579px",
          marginInline: -58,
          marginTop: -20,
          marginBottom: -20,
        }}
      >
        <TextExample />

        <div
          style={{
            float: "right",
            paddingRight: 10,
            marginTop: "20px",
          }}
        >
          <select
            id="selectBox"
            onChange={onchange}
            value={lineData.selectedMetric}
            style={{ background: "#F5F8FA", borderColor: "#F5F8FA" }}
          >
            <option key="today">Today</option>
            <option key="yesterday">yesterday</option>
          </select>
        </div>
        <div style={{ padding: 10 }}>
          <h4
            style={{
              witdh: "68px",
              height: "28px",
            }}
          >
            Insights
          </h4>
        </div>

        <div>
          <br />
          <CardGroup style={{ paddingLeft: "10px", marginTop: -20 }}>
            <Row>
              <Col>
                <Card
                  style={{
                    padding: 0,
                    width: "560px",
                    height: "351px",
                    left: "30px",
                    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
                    borderRadius: "8px",
                  }}
                >
                  <Card.Title
                    style={{
                      paddingLeft: 10,
                      marginTop: 10,
                      fontSize: "14px",
                    }}
                  >
                    Customers
                  </Card.Title>
                  <Card.Text
                    style={{ color: "gray", paddingLeft: 10, fontSize: "12px" }}
                  >
                    260 Customers
                  </Card.Text>
                  <Card.Title
                    style={{
                      marginTop: 14,
                      boxSizing: "border-box",
                      position: "absolute",
                      width: "70px",
                      height: "25px",
                      background: "#F5F8FA",
                      borderRadius: "8px",
                      marginLeft: "450px",
                      textAlign: "Center",
                      fontSize: "16px",
                    }}
                  >
                    Today
                  </Card.Title>
                  <Line
                    data={data}
                    options={data.options}
                    style={{ padding: 20, marginTop: "-22px" }}
                  >
                    data{" "}
                  </Line>
                </Card>
              </Col>
              <Col
              // xs={{
              //   order: 2,
              //   span: 5,
              //   offset: 1,
              // }}
              // sm={{
              //   order: 2,
              //   span: 4,
              //   offset: 8,
              // }}
              // md={{
              //   order: 4,
              //   span: 7,
              //   offset: 3,
              // }}
              // lg={{
              //   order: 2,
              //   offset: 9,
              //   span: 2,
              // }}
              // xl={{
              //   order: 2,
              //   offset: 5,
              //   span: 8,
              // }}
              >
                <Card
                  style={{
                    width: "560px",
                    height: "351px",
                    top: "0px",
                    left: "80px",
                    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
                    borderRadius: "8px",
                  }}
                >
                  <Card.Title
                    style={{ paddingLeft: 10, marginTop: 10, fontSize: "14px" }}
                  >
                    Properties
                  </Card.Title>
                  <Card.Text
                    style={{ color: "gray", paddingLeft: 10, fontSize: "12px" }}
                  >
                    1500 Properties
                  </Card.Text>
                  <Card.Title
                    style={{
                      marginTop: 14,
                      boxSizing: "border-box",
                      position: "absolute",
                      width: "70px",
                      height: "25px",
                      background: "#F5F8FA",
                      borderRadius: "8px",
                      marginLeft: "450px",
                      textAlign: "Center",
                      fontSize: "16px",
                    }}
                  >
                    Today
                  </Card.Title>

                  <Line
                    data={secdata}
                    options={data.options}
                    style={{ padding: 20, marginTop: "-22px" }}
                  >
                    data
                  </Line>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default Chart;
