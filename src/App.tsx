import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const router = createBrowserRouter(AppRoutes);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;