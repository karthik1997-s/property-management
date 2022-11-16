import React, { useEffect, useState } from "react";
import PropertiesTable from "./PropertiesTable";
import { Avatar, Card, Typography, Row, Col, Button, Switch } from "antd";
import PropertyDetails from "./PropertyDetails";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setProduct(await response.json());
    };

    getProduct();
  }, [id]);

  const navigate = useNavigate();
  const myClick = () => {
    navigate("/dashboard/data");
  };
  return (
    <div
      style={{
        marginLeft: "-50px",
        marginBlockEnd: "-20px",
        marginRight: "-60px",
      }}
    >
      {console.log("record..", product)}

      <Col>
        <Button
          type="link"
          style={{ color: "black", paddingLeft: 0 }}
          onClick={myClick}
        >
          <AiOutlineArrowLeft />
          Back
        </Button>
      </Col>
      <Col>
        <Typography.Text>
          {" "}
          Customer ID <span style={{ color: "blue" }}>{product.id}</span>{" "}
        </Typography.Text>
        <Typography.Text style={{ float: "right" }}>
          User Status <Switch size="small" defaultChecked />{" "}
        </Typography.Text>
      </Col>
      <Row>
        <Col
          xs={{ span: 18, order: 1 }}
          sm={{ span: 17, order: 1 }}
          md={{ span: 17, order: 1 }}
          lg={{ span: 17, order: 1 }}
          xl={{ span: 8, order: 1 }}
        >
          <Card
            style={{
              maxWidth: 366,
              marginTop: 16,
              height: "93%",
              borderRadius: "8px",
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Typography.Title level={4} style={{ fontSize: "16px" }}>
              Customer Details
            </Typography.Title>
            <Card.Meta
              avatar={
                <Avatar
                  shape="square"
                  size={100}
                  src={product.profile?.avatar}
                />
              }
              title={product?.name}
              description={product?.email}
            />
          </Card>
        </Col>
        <Col
          xs={{ span: 8, order: 2, offset: 0 }}
          sm={{ span: 8, order: 2, offset: 0 }}
          md={{ span: 8, order: 2, offset: 0 }}
          lg={{ span: 8, order: 2, offset: 0 }}
          xl={{ span: 8, order: 2 }}
        >
          <PropertyDetails />
        </Col>
      </Row>
      <br />
      <PropertiesTable />
    </div>
  );
}

export default Details;
