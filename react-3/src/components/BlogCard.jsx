import React from "react";
import "../assets/css/card.css";

import classes from "./BlogCard.module.css";
import styled from "styled-components";

export default function BlogCard({ padding }) {
  return (
    <>
      <StyledCardWrapper paddingfromcomponent={padding}>
        <div className={classes.cardwrapper}>
          <img
            style={{ height: "200px" }}
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="Blog"
          />
          <h2>Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </StyledCardWrapper>
    </>
  );
}

const StyledCardWrapper = styled.div`
  width: 300px;
  height: 400px;
  padding: ${(props) => props.paddingfromcomponent || "30px"};

  h2 {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
`;

// const H2 = styled.h2`
//   color: red;
//   font-size: 20px;
//   font-weight: bold;
// `;
