import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
