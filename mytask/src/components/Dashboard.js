import React, { useState } from "react";
import {
  Layout,
  Typography,
  Menu,
  Breadcrumb,
  Row,
  Card,
  Avatar,
  Col,
  Dropdown,
  Divider,
} from "antd";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbMessage2 } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import icon from "../image/icon.png";
import DateTime from "./DateTime";

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;
function CustomerDetails() {
  const [active, setActive] = useState(false);
  const [clickname, setClickname] = useState([]);
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/" style={{ color: "red" }}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="264px"
          height="1024px"
          style={{ background: "#fff", cursor: "pointer" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <Title
              level={5}
              style={{
                padding: "20px",
                color: "#489975",
                fontSize: "16px",
                marginBottom: "-33px",
                lineHeight: "20px",
              }}
            >
              Property <br />
              Management
            </Title>
          </div>
          <hr />
          <Menu
            defaultSelectedKeys="Dashboard"
            onClick={(info) => {
              setClickname(info.key);
            }}
            mode="vertical"
          >
            <Menu.Item
              className="customclass"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                left: "12px",
                width: "236px",
                borderRadius: "8px",
              }}
              key="Dashboard"
              icon={<RiDashboardLine />}
            >
              <span> Dashboard</span> <Link to="/dashboard/chart" />
            </Menu.Item>
            <Menu.Item
              style={{
                fontSize: "14px",
                fontWeight: 500,
                left: "12px",
                width: "236px",
                borderRadius: "8px",
              }}
              key="Customer Management"
              icon={<HiOutlineUserGroup />}
            >
              <span>Customers management</span> <Link to="/dashboard/data" />
            </Menu.Item>
            <Menu.Item
              style={{
                fontSize: "14px",
                fontWeight: 500,
                left: "12px",
                width: "236px",
                borderRadius: "8px",
              }}
              key="Information"
              icon={<TbMessage2 />}
            >
              <span> Information</span> <Link to="/dashboard/info" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#fff",
              height: "66px",
              width: "1268px",
              marginInlineStart: "2px",
              top: "0px",
            }}
          >
            <Row gutter={[16, 8]}>
              <Col
                span={8}
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
                {/* <Text
                  className="text"
                  style={{
                    width: "152px",
                    height: "72px",

                    background: "#F5F8FA",
                    borderRadius: "5px",
                  }}
                >
                  <span
                    style={{
                      paddingLeft: 10,
                      fontSize: "14px",
                      paddingRight: 10,
                    }}
                  >
                    {clickname}
                  </span>
                </Text> */}
                <div className="sidemenuname">
                  <p
                    style={{
                      marginTop: "-17px",
                      textAlign: "center",
                      fontSize: "14px",
                    }}
                  >
                    {clickname}
                  </p>
                </div>
              </Col>

              <Col
                span={8}
                style={{ marginLeft: "345px" }}
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
                <DateTime />
              </Col>
              <Col
                span={1}
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
                <Divider
                  type="vertical "
                  style={{ height: "50px", marginLeft: "-135px" }}
                />
              </Col>
              <Col
                span={1}
                style={{ marginLeft: "-180px" }}
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
                    width: 200,
                    height: "76px",
                    marginTop: -9,
                    borderLeft: 0,
                    borderBottom: 0,
                    borderTop: 0,
                    borderRight: 0,
                    position: "relative",
                  }}
                >
                  <Dropdown overlay={menu}>
                    <Card.Meta
                      title="Micheal Raj"
                      avatar={<Avatar shape="square" size="large" src={icon} />}
                      description="cashier"
                    />
                  </Dropdown>
                </Card>
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              padding: "0 50px",
              marginTop: "15px",
              marginBottom: "-6px",
            }}
          >
            <div style={{ padding: 10, minHeight: 550 }}>
              <Outlet />
            </div>
          </Content>
          <Footer>
            <Breadcrumb
              style={{
                background: "#fff",
                marginTop: "-18px",
                padding: 20,
                marginInlineStart: "-48px",

                width: "1270px",
                height: "65px",
                marginBottom: "-23px",
              }}
            >
              <Breadcrumb.Item>
                <Text strong>Logo</Text>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default CustomerDetails;
