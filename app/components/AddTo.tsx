"use client";
import React from "react";

const AddTo = () => {
  return (
    <>
      <div>products</div>;
      <button
        onClick={() => {
          alert("added");
        }}
      >
        Add to carts
      </button>
    </>
  );
};

export default AddTo;
