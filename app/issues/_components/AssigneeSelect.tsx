"use client";
import React from "react";

const AssigneeSelect = () => {
  const users = ["User 1", "User 2", "User 3", "User 4"];
  return (
    <select defaultValue="Assing to user" className="select select-primary ">
      <option disabled={true}>Assing to user</option>
      {users.map((user) => (
        <option key={user}>{user}</option>
      ))}
    </select>
  );
};

export default AssigneeSelect;
