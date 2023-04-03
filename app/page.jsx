import Link from "next/link";
import React from "react";
import { alldata, PostData } from "../utils/featurs";

const page = async () => {
  const users = await alldata();

  return (
    <div>
      <h1>pages main</h1>
      <div>
        {users?.map((i) => (
          <>
            <Link key={i.id} href={`/user/${i.id}`}>
              <span>{i.name}</span>
            </Link>
            <br />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default page;
