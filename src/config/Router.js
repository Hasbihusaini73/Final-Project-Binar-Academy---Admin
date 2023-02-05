import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
  },
]);

export default router;
