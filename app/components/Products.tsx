"use client";
// import React from "react";
// import AddTo from "./AddTo";
// import UseData from "../hooks/useUserData";

// const Products = () => {
//   const jobsData = UseData();
//   return (
//     <>
//       <AddTo />;
//       {jobsData?.map((job, index) => (
//         <li key={index}>{job.company}</li>
//       ))}
//     </>
//   );
// };

// export default Products;

// components/UserList.tsx
import React from "react";
import useUserData from "../hooks/useUserData";

const UserList = () => {
  const userdata = useUserData();

  if (!userdata) {
    return <p>Loading...</p>;
  }
  const x: string = userdata[0].about.categories;
  return (
    <ul>
      {/* {userdata.map((user, index) => (
        <li key={index}>{user.about.categories}</li>
      ))} */}
      <li>{x}</li>
    </ul>
  );
};

export default UserList;
