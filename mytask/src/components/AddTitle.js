import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Form, Input, Typography } from "antd";
import { Editor } from "@tinymce/tinymce-react";

function AddTitle() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault(e);
    console.log(e);
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
          <Col span={8}>
            <h5>Information</h5>
          </Col>
          <Col span={1} offset={14}>
            <Link to="/dashboard/info">Back</Link>
          </Col>
        </Row>
      </div>
      <div
        style={{ background: "#fff", paddingLeft: "25px", minHeight: "520px" }}
      >
        <Form layout="vertical" onFinish={submit}>
          <Row>
            <Col span={23}>
              <Form.Item
                name="title"
                label="Title"
                value={title}
                labelCol={{ span: 54 }}
                wrapperCol={{ span: 54 }}
              >
                <Input onChange={(e) => setTitle(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="Description"
                label="Description"
                labelCol={{ span: 20 }}
                wrapperCol={{ sapn: 20 }}
              >
                <Editor
                  value={desc}
                  apiKey={"7i05uhi4gi3l7bzhmrro5ojb4dh6890o1mko86a3zcaal478"}
                  textareaName="Description"
                  initialValue="Type here"
                  onEditorChange={(e) => setDesc(e.target.value)}
                  init={{
                    selector: "textarea",
                    statusbar: false,
                    height: 300,
                    menubar: false,
                    plugins: [
                      "a11ychecker",
                      "advlist",
                      "advcode",
                      "advtable",
                      "autolink",
                      "checklist",
                      "export",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "powerpaste",
                      "fullscreen",
                      "formatpainter",
                      "insertdatetime",
                      "media",
                      "table",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "| casechange blocks | bold underline  italic  alignleft aligncenter alignright | bullist   numlist link |",

                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col span={3} offset={21}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: "green",
                  borderColor: "green",
                }}
              >
                {" "}
                save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default AddTitle;
