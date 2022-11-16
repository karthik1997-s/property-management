import Card from "react-bootstrap/Card";
import { GiFactory } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import { TbPlant } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { RiBuildingLine } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import CardGroup from "react-bootstrap/CardGroup";

import { Col } from "antd";

function TextExample() {
  return (
    <>
      <CardGroup style={{ padding: 9 }}>
        <Col
          span={4}
          xs={{
            order: 1,
          }}
          sm={{
            order: 1,
          }}
          md={{
            order: 1,
          }}
          lg={{
            order: 1,
          }}
        >
          <Card
            className="cardhover"
            style={{
              Width: "13rem",
              maxHeight: "4rem",
              boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
              marginInlineStart: "10px",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  background: "#E4FFF3",
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                }}
              >
                <HiUserGroup
                  size={28}
                  style={{ paddingLeft: "6px" }}
                  color={"#489975"}
                />
              </Card.Title>
              <Card.Title style={{ marginTop: "-45px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "40px",
                  }}
                >
                  932
                </span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "14px",
                  paddingLeft: "40px",
                  marginTop: "-10px",
                }}
              >
                Total Customers
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col
          span={4}
          xs={{
            order: 2,
          }}
          sm={{
            order: 2,
          }}
          md={{
            order: 2,
          }}
          lg={{
            order: 2,
          }}
        >
          <Card
            style={{
              maxWidth: "13rem",
              maxHeight: "4rem",
              marginInlineStart: "10px",
              boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
            }}
            className="cardhover"
          >
            <Card.Body>
              <Card.Title
                style={{
                  background: "#DEDFFF",
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                }}
              >
                <RiBuildingLine
                  size={28}
                  style={{ paddingLeft: "6px" }}
                  color={"#353473"}
                />
              </Card.Title>
              <Card.Title style={{ marginTop: "-45px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "40px",
                  }}
                >
                  1932
                </span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "14px",
                  paddingLeft: "40px",
                  marginTop: "-10px",
                }}
              >
                Total Properties
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col
          span={4}
          xs={{
            order: 3,
          }}
          sm={{
            order: 3,
          }}
          md={{
            order: 3,
          }}
          lg={{
            order: 3,
          }}
        >
          <Card
            style={{
              maxWidth: "13rem",
              maxHeight: "4rem",
              marginInlineStart: "10px",
              boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
            }}
            className="cardhover"
          >
            <Card.Body>
              <Card.Title
                style={{
                  background: "#FFDA9D",
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                }}
              >
                <BsBuilding
                  size={28}
                  style={{ paddingLeft: "6px" }}
                  color={"#907954"}
                />
              </Card.Title>
              <Card.Title style={{ marginTop: "-45px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "40px",
                  }}
                >
                  25
                </span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "14px",
                  paddingLeft: "40px",
                  marginTop: "-10px",
                }}
              >
                Commercial
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col
          span={4}
          xs={{
            order: 4,
          }}
          sm={{
            order: 4,
          }}
          md={{
            order: 4,
          }}
          lg={{
            order: 4,
          }}
        >
          <Card
            style={{
              maxWidth: "13rem",
              maxHeight: "4rem",
              marginInlineStart: "10px",
              boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
            }}
            className="cardhover"
          >
            <Card.Body>
              <Card.Title
                style={{
                  background: "#B0D1F4",
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                }}
              >
                <GrHomeRounded
                  size={28}
                  style={{ paddingLeft: "6px" }}
                  color={"#183C62"}
                />
              </Card.Title>
              <Card.Title style={{ marginTop: "-45px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "40px",
                  }}
                >
                  25
                </span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "14px",
                  paddingLeft: "40px",
                  marginTop: "-10px",
                }}
              >
                Residencial
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col
          span={4}
          xs={{
            order: 5,
          }}
          sm={{
            order: 5,
          }}
          md={{
            order: 5,
          }}
          lg={{
            order: 5,
          }}
        >
          <Card
            style={{
              maxWidth: "13rem",
              maxHeight: "4rem",
              marginInlineStart: "10px",
              boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
            }}
            className="cardhover"
          >
            <Card.Body>
              <Card.Title
                style={{
                  background: "#AED5B9",
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                }}
              >
                <TbPlant
                  size={28}
                  style={{ paddingLeft: "6px" }}
                  color={"#5F7465"}
                />
              </Card.Title>
              <Card.Title style={{ marginTop: "-45px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "40px",
                  }}
                >
                  25
                </span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "14px",
                  paddingLeft: "40px",
                  marginTop: "-10px",
                }}
              >
                Agriculture
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col
          span={4}
          xs={{
            order: 6,
          }}
          sm={{
            order: 6,
          }}
          md={{
            order: 6,
          }}
          lg={{
            order: 6,
          }}
        >
          <Card
            style={{
              maxWidth: "13rem",
              maxHeight: "4rem",
              marginInline: "10px",
              boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
            }}
            className="cardhover"
          >
            <Card.Body>
              <Card.Title
                style={{
                  background: "#B4D3DC",
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                }}
              >
                <GiFactory
                  size={28}
                  style={{ paddingLeft: "6px" }}
                  color={"#2C4A4F"}
                />
              </Card.Title>
              <Card.Title style={{ marginTop: "-45px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "40px",
                  }}
                >
                  25
                </span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "14px",
                  paddingLeft: "40px",
                  marginTop: "-10px",
                }}
              >
                Industrial
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </CardGroup>
    </>
  );
}

export default TextExample;
