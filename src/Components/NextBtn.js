import React from "react";

const NextBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <props.icon style={{ color: "#e37d2c", fontSize: "30px" }} />
    </div>
  );
};

export default NextBtn;
