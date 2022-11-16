import React from "react";
import moment from "moment";

function DateTime() {
  const Today = moment().format("ddd");
  const Localtime = moment().format(" LT");
  const date = moment().format("D MMM");
  return (
    <div>
      <p
        style={{
          marginTop: "8px",
          display: "flex",
          fontSize: "14px",
          width: "170px",
          height: "50px",
          backgroundColor: "#F5F8FA",
          justifyContent: "center",
          textAlign: "top center",
          color: "#5F6478",
          fontWeight: "600",
          borderRadius: "8px",
          letterSpacing: "0.001em",
          marginLeft: "60px",
        }}
      >
        {Today},{date}
        {Localtime}
      </p>
    </div>
  );
}

export default DateTime;
