import { Table, Input, Button, Row, Col } from "antd";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Typography, Switch } from "antd";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";

const { Text } = Typography;

function Tabledata() {
  const history = useNavigate();

  const [dataSources, setDataSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const showtotal = (total, range) => (
    <div
      style={{
        color: "grey",
        position: "absolute",
        marginBottom: "40px",
        left: "0",
      }}
    >{`Show ${range[0]}-${range[1]} of ${total} entries`}</div>
  );

  useEffect(() => {
    getData();
  }, []);
  const [select, setSelect] = useState({
    seletedkeys: [],
  });
  // console.log("SelectedRow keys", select);
  const { selectedRowKeys } = select;
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelect({
        ...select,
        selectedRowKeys: selectedRowKeys,
      });
    },
  };

  const ondelete = () => {
    let selectedData = selectedRowKeys;
    dataSources.forEach((e) => {
      if (e.select) {
        selectedData.push(e.id);
      }
    });

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${selectedData}`)
      .then((data) => {
        console.log("Checkbox Delete", data);
        getData();
      })
      .catch((err) => console.log(err));
  };

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
    setLoading(false);
    console.log(res);
    setDataSources(
      res.data.map((row) => ({
        name: row.username,
        email: row.email,
        id: row.id,
        createdAt: row.createdAt,
        key: row.id,
        image: row.profile,
      }))
    );
  };
  const handlesearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      getData();
    }
  };
  const globalsearch = () => {
    let filteredValue = dataSources.filter((value) => {
      return (
        value.name.toLowerCase().includes(search.toLowerCase()) ||
        value.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    setDataSources(filteredValue);
  };
  return (
    <>
      <div>
        <div
          style={{
            background: "#fff",
            height: "590px",
            marginInline: -45,
            marginTop: -18,
            marginBottom: -20,
            borderRadius: "8px",
          }}
        >
          <Row>
            <Col span={6} order={1}>
              <Input
                className="search"
                prefix={<CiSearch onClick={globalsearch} />}
                onChange={handlesearch}
                type="text"
                allowClear
                value={search}
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "42px",
                  marginLeft: "20px",
                  top: 10,
                  borderRadius: "8px",

                  // background: "#F5F8FA",
                }}
                placeholder="Search Customer"
              />
            </Col>
            <Col
              span={2}
              order={2}
              style={{ marginTop: "20px", fontSize: "12px" }}
            >
              <Text type="secondary">
                {selectedRowKeys && selectedRowKeys.length} Selected
              </Text>
            </Col>
            <Col
              span={2}
              order={3}
              style={{ marginTop: "20px", fontSize: "12px" }}
            >
              <Text>
                <AiOutlineEye style={{ color: "gray" }} />
                View
              </Text>
            </Col>
            <Col
              span={6}
              order={3}
              style={{ marginTop: "12px", whiteSpace: "30px", right: "50px" }}
            >
              <Button
                icon={<RiDeleteBin5Line size={11} style={{ color: "gray" }} />}
                onClick={() => ondelete()}
                type="text"
              >
                <span style={{ fontSize: "12px" }}>Delete</span>
              </Button>
            </Col>
          </Row>
          <div style={{ overflowX: "auto" }}>
            {loading ? (
              <p style={{ textAlign: "center" }}>Loading...</p>
            ) : (
              <>
                <Table
                  size="small"
                  columns={[
                    {
                      title: " Customer ID",
                      dataIndex: "id",
                      onCell: (records) => ({
                        onClick: () => {
                          history(`/dashboard/records/${records.id}`);
                        },
                      }),
                      // onCellClick: (records) => {
                      //   console.log(records);
                      //   history(`/dashboard/records/${records.id}`);
                      // },
                    },
                    {
                      title: "Customer Name",
                      dataIndex: "name",

                      filteredValue: [search],
                      onFilter: (value, index) => {
                        return String(index.name)
                          .toLowerCase()
                          .includes(value.toLowerCase());
                      },
                    },

                    {
                      title: "Email ID",
                      dataIndex: "email",
                    },
                    // { title: "Account Created", dataIndex: "createdAt" },
                    {
                      title: "User Status",
                      dataIndex: "",
                      render: (text) => <Switch defaultChecked />,
                    },
                  ]}
                  dataSource={dataSources}
                  pagination={{
                    style: { marginTop: "10px" },

                    defaultCurrent: 6,
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ["5", "10"],
                    position: ["bottomRight"],
                    total: 10,
                    size: "small",
                    showTotal: showtotal,
                  }}
                  rowSelection={rowSelection}
                  // onRow={(record) => {
                  //   return {
                  //     onClick: (event) => {
                  //       history(`/dashboard/records/${record.id}`);
                  //     },
                  //   };
                  // }}
                  style={{
                    marginTop: "30px",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabledata;
