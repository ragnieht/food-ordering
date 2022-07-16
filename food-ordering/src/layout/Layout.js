import React from "react";
import MainNav from "./MainNav";
import "./Layout.css";
export default function Layout(props) {
  return (
    <section>
      <MainNav />
      <main className="main">{props.children}</main>
    </section>
  );
}
