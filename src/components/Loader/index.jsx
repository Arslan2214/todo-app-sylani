import React from "react";
import { RiseLoader } from "react-spinners";
import { styled } from "styled-components";

function index() {
  const Loader = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    z-index: 9999;
    text-align: center;
    background-color: #fff;
    height: 100px;
    width: 200px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      <Loader>
        <RiseLoader color="#36d7b7" />
      </Loader>
    </>
  );
}

export default index;
