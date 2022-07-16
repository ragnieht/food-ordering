import React from "react";
import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
export default function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/menu" exact>
        <MenuPage />
      </Route>
    </Layout>
  );
}
