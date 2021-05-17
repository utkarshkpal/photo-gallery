import React from "react";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <span className="logo">Logo</span>
        <h1> Site Title</h1>
      </header>

      <section>
        <article className="header-img">
          <p>Header Image</p>
        </article>
      </section>
      {children}
    </>
  );
}
