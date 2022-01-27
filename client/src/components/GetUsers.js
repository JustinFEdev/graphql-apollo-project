import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../graphql/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // setUsers(data.GetUsers);
    console.log("data");
    console.log(data);
  }, [data]);

  return <div></div>;
  // {
  //   /* {users.map((info) => {
  //       return <h1>{info.firstName}</h1>;
  //     })} */
  // }
}

export default GetUsers;
