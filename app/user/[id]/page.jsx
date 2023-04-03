import React from "react";
import { userDetails } from "../../../utils/featurs";
const page = async ({ params }) => {
  const user = await userDetails(params.id);
  console.log(params.id);

  return (
    <div>
      page
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default page;
