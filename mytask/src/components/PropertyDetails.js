import React from "react";
import { Card, Avatar, Typography, Row, Col } from "antd";
import property from "../image/property.png";

const { Grid } = Card;

function PropertyDetails() {
  return (
    <>
      <Row>
        <Col span={20}>
          <Card
            style={{
              width: 858,
              right: "30px",
              marginTop: 16,
              height: "220px",
              borderRadius: "8px",
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Typography.Title level={4} style={{ fontSize: "16px" }}>
              Property Details
            </Typography.Title>
            <Card.Meta
              avatar={
                <Avatar shape="square" size={50} type="square" src={property} />
              }
              title="25"
              description="Total Properties"
            />
            <br />
            <Card
              style={{ width: "750px", marginTop: -15, borderColor: "green" }}
            >
              <Grid
                style={{
                  width: "25%",
                  background: "rgba(192,192,192,0.1)",
                  height: "86px",
                }}
                hoverable={false}
              >
                <Typography.Text strong>25</Typography.Text>
                <br />
                <Typography.Text>Commercial</Typography.Text>
              </Grid>
              <Card.Grid
                style={{
                  width: "25%",
                  background: "rgba(192,192,192,0.1)",
                  height: "86px",
                }}
                hoverable={false}
              >
                <Typography.Text strong>25</Typography.Text>
                <br />
                <Typography.Text>Industrial</Typography.Text>
              </Card.Grid>
              <Card.Grid
                style={{
                  width: "25%",
                  background: "rgba(192,192,192,0.1)",
                  height: "86px",
                }}
                hoverable={false}
              >
                <Typography.Text strong>25</Typography.Text>
                <br />
                <Typography.Text>Agricultural</Typography.Text>
              </Card.Grid>
              <Card.Grid
                style={{
                  width: "25%",
                  background: "rgba(192,192,192,0.1)",
                  height: "86px",
                }}
                hoverable={false}
              >
                <Typography.Text strong>25</Typography.Text>
                <br />
                <Typography.Text>Residencial</Typography.Text>
              </Card.Grid>
            </Card>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PropertyDetails;
