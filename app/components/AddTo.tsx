"use client";
import React from "react";

const AddTo = () => {
  return (
    <>
      <div>products</div>;
      <button
        className="p-1 hover:bg-black text-sm font-Poppins"
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
