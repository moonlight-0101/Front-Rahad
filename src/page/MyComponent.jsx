import React from "react";
// import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import vector from "../image/Vector.svg"

const MyComponent = () => {
  return (
    <>
      <h4>Default:</h4>
      <Checkbox />
      <h4>Using Custom Icon:</h4>
      <Checkbox
        icon={<img src={vector} className="bg-[#FB2047] w-[21px] h-[21px]  " alt="" />}
        borderColor="#D7C629"
        // className={`w-[20px] h-[20px] border border-[#004765]`}
        style={{ cursor: "pointer",  width:"20px",height:"20px",border:"1px solid #004765",outline:"none"}}
        labelStyle={{ marginLeft: 5, userSelect: "none" }}
       
      />
      {/* <h4>Using Image Icon:</h4> */}
      {/* <Checkbox
        checked={true}
        // icon={<img src={require("./check.png")} style={{ width: 24 }} alt="" />}
        borderColor="#D7C629"
        borderRadius={10}
        size={18}
        label="Get em!"
      /> */}
      {/* <h4>More Styling:</h4>
      <Checkbox
        checked={true}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#174A41",
              alignSelf: "stretch",
            }}
          >
            <Icon.FiCheck color="white" size={20} />
          </div>
        }
        borderColor="#174A41"
        // borderWidth={0}
        borderRadius={20}
        style={{ overflow: "hidden" }}
        size={20}
        label="Coooool right?"
      /> */}
    </>
  );
};

export default MyComponent;