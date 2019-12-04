import React from "react";
import { Link } from "@reach/router";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <h1 className="brand logo red">Marvelpedia</h1>
      </Link>
    </nav>
  );
}
