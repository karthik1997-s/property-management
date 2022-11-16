import React, { useState } from "react";
import { Button, Collapse, Typography, Row, Col } from "antd";
import support from "../image/support.png";
import contact from "../image/contact.png";
import about from "../image/i.png";
import arrow from "../image/arrow.png";
import { RiDeleteBinLine } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
export default function Info() {
  const navigate = useNavigate();
  const [infodata, setInfodata] = useState([
    {
      id: 1,
      title: "About us",
      image: <img src={about} alt="no" />,
      info: "20+ startups and enterprises | 300k data points analysed |  experience & expertise. Identify experience drivers , quantify their impact & prioritise your action for great CX. 300+K Customer Insights. High-Growth Startups. Request A Demo.",
    },
    {
      id: 2,
      title: "How its works",
      image: <img src={support} alt="no" />,
      info: "A CRM system essentially provides a central place where businesses can store customer and prospect data, track customer interactions, and share this information with colleagues. It allows businesses to manage relationships with customers, helping the business to grow.",
    },
    {
      id: 3,
      title: "Support",
      image: <img src={contact} alt="no" />,
      info: "Email:abce@gmail.com",
    },
  ]);
  const buttonClick = () => {
    navigate("/dashboard/titleform");
  };
  const onChange = (key) => {
    //     console.log(key);
  };
  const removeElement = (id) => {
    const newFruits = infodata.filter((fruit) => fruit.id !== id);
    setInfodata(newFruits);
  };
  return (
    <>
      <div>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col span={8} offset={1} style={{ paddingLeft: "-10px" }}>
            <Typography.Title
              level={4}
              style={{ fontSize: "16px", marginLeft: "-70px" }}
            >
              Information
            </Typography.Title>
          </Col>
          <Col span={1} offset={12}>
            <Button
              type="link"
              style={{
                background: "rgb(0,128,0)",
                borderColor: "rgb(0,128,0)",
                borderRadius: "8px",
                color: "white",
                marginLeft: "60px",
              }}
              onClick={buttonClick}
            >
              Add Title
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ marginBottom: "206px" }}>
        {infodata.map((item) => {
          return (
            <>
              <Collapse
                key={item.id}
                accordion
                onChange={onChange}
                expandIcon={(isActive) =>
                  isActive ? <p>{item.image}</p> : <p>{item.image}</p>
                }
                expandIconPosition="start"
                ghost="true"
                style={{
                  marginInlineStart: "-50px",
                  marginInlineEnd: "-50px",
                  borderRadius: "-10px",
                }}
              >
                <Collapse.Panel
                  style={{
                    margin: "14px",
                    background: "#fff",
                    Width: "1132px",
                    borderRadius: "8px",
                  }}
                  header={
                    <div>
                      <p style={{ marginBottom: "-10px" }}>{item.title}</p>
                      <span>
                        <RiDeleteBinLine
                          style={{
                            position: "relative",
                            top: "-12px",
                            marginLeft: "1110px",
                          }}
                          onClick={() => removeElement(item.id)}
                          onMouseOver={({ target }) =>
                            (target.style.color = "red")
                          }
                          onMouseOut={({ target }) =>
                            (target.style.color = "black")
                          }
                        />
                      </span>
                    </div>
                  }
                  key={item.id}
                  extra={<img src={arrow} alt="l" />}
                >
                  <p>{item.info}</p>
                </Collapse.Panel>
              </Collapse>
            </>
          );
        })}
      </div>
    </>
  );
}
