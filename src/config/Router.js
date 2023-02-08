import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import RenderLayout from "./RenderLayout";
import SignInPage from "../pages/SignInPage";
import { PublicRoute, PrivateRoute } from "../components/RouteHandler";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<PublicRoute Children={<RenderLayout Children={<SignInPage />} />} />} />
      <Route exact path="/dashboard" element={<PrivateRoute Children={<AdminLayout />} />} />
    </>
  )
);

export default router;
