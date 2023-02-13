import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "../components/RouteHandler";
import AdminLayout from "./AdminLayout";
import RenderLayout from "./RenderLayout";
import SignInPage from "../pages/SignInPage";
import DashboardPage from "../pages/DashboardPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<PublicRoute Children={<RenderLayout Children={<SignInPage />} />} />} />
      <Route exact path="/dashboard" element={<PrivateRoute Children={<AdminLayout Children={<DashboardPage />} />} />} />
    </>
  )
);

export default router;
