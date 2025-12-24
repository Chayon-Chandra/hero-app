import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetailsCard from "../Componentes/AppDetailsCard/AppDetailsCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    loader: async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return null;
    },
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 400));
          return null;
        },
      },
      {
        path: "/apps",
        Component: Apps,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 400));
          return null;
        },
      },
      {
        path: "/installation",
        Component: Installation,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 400));
          return null;
        },
      },
      {
        path: "/apps/:id",
        Component: AppDetailsCard,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 400));
          return null;
        },
      },
    ],
  },
]);
