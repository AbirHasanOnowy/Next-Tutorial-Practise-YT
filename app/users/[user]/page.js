"use client";
import { redirect } from "next/navigation";
const User = ({ params }) => {
  if (params.user !== "admin") {
    redirect("/login");
  }
  return <div>Welcome {params.user}</div>;
};

export default User;
