import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Table, Space, Popover, Row, Col, Typography } from "antd";
import CornerTable from "./cornerTable";
const data = [
  {
    key: 1,
    PropertyId: "PTY150054",
    serverNo: "1223",
    PropertyType: "commercial",
    PlotNo: "B 12",
    Area: "200 sq ft",
    Corners: 4,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 2,
    PropertyId: "PTY150055",
    serverNo: "12",
    PropertyType: "Residencial",
    PlotNo: "12/23",
    Area: "200 sq ft",
    Corners: 5,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 3,
    PropertyId: "PTY150056",
    serverNo: "33",
    PropertyType: "Industrial",
    PlotNo: "A 2",
    Area: "200 sq ft",
    Corners: 5,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 4,
    PropertyId: "PTY150057",
    serverNo: "14B",
    PropertyType: "Industrial",
    PlotNo: "09",
    Area: "200 sq ft",
    Corners: 3,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 5,
    PropertyId: "PTY150058",
    serverNo: "421 C",
    PropertyType: "Residencial",
    PlotNo: "2/33",
    Area: "200 sq ft",
    Corners: 3,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 6,
    PropertyId: "PTY150059",
    serverNo: "111",
    PropertyType: "Industrial",
    PlotNo: " D 13",
    Area: "200 sq ft",
    Corners: 4,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 7,
    PropertyId: "PTY150060",
    serverNo: "34B",
    PropertyType: "Commercial",
    PlotNo: " A 10",
    Area: "200 sq ft",
    Corners: 2,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 8,
    PropertyId: "PTY150061",
    serverNo: "231",
    PropertyType: "Commercial",
    PlotNo: " 2/10",
    Area: "200 sq ft",
    Corners: 5,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 9,
    PropertyId: "PTY150062",
    serverNo: "19",
    PropertyType: "Residencial",
    PlotNo: " A 01",
    Area: "200 sq ft",
    Corners: 3,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
  {
    key: 10,
    PropertyId: "PTY150063",
    serverNo: "110B",
    PropertyType: "Industrial",
    PlotNo: " B 11",
    Area: "200 sq ft",
    Corners: 2,
    AddedDate: "26 - 09 - 2022 9:40AM",
  },
];
const columns = [
  {
    key: "1",
    title: "Property ID",
    dataIndex: "PropertyId",
  },
  {
    key: "2",
    title: " Server Number",
    dataIndex: "serverNo",
  },
  {
    key: "3",
    title: "Property Type",
    dataIndex: "PropertyType",
  },
  {
    key: "4",
    title: "Plot No",
    dataIndex: "PlotNo",
  },
  {
    key: "5",
    title: "Area",
    dataIndex: "Area",
  },
  {
    key: "6",
    title: "Corners",
    dataIndex: "Corners",
    render: (text) => (
      <p>
        {text}

        <Space style={{ paddingLeft: "20px" }}>
          <Popover title="Corners" content={CornerTable}>
            <HiOutlineExclamationCircle style={{ color: "gray" }} />
          </Popover>
        </Space>
      </p>
    ),
  },
  {
    key: "7",
    title: "Added Date",
    dataIndex: "AddedDate",
  },
];
function PropertiesTable() {
  return (
    <>
      <Row
        style={{
          background: "#fff",
          width: "1235px",
          borderRadius: "8px",
        
        }}
      >
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 24, order: 1 }}
          lg={{ span: 24, order: 1 }}
          xl={{ span: 24, order: 1 }}
        >
          <Typography.Title
            level={4}
            style={{
              Top: 16,
              marginLeft: 20,
              paddingTop: 10,
              fontSize: "18px",
              height: "40px",
            }}
          >
            Properties
          </Typography.Title>
          <Table
            style={{ marginLeft: 20, marginRight: 20, height: "620px" }}
            dataSource={data}
            columns={columns}
            rowSelection={{
              type: "checkbox",
              onSelect: (records) => {
                console.log({ records });
              },
            }}
            pagination={false}
            size="small"
          />
        </Col>
      </Row>
    </>
  );
}

export default PropertiesTable;
