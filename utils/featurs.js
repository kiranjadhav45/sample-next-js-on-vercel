export const alldata = async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!resp.ok) {
    new Error("something went wrong");
  } else {
    console.log("working fine all data");
    return await resp.json();
  }
};

export const userDetails = async (id) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!resp.ok) {
    new Error("something went wrong userDetails");
  } else {
    console.log("working fine user details");
    return await resp.json();
  }
};
