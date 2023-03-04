import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "../components/RouteHandler";
import AdminLayout from "./AdminLayout";
import RenderLayout from "./RenderLayout";
import SignInPage from "../pages/SignInPage";
import DashboardPage from "../pages/DashboardPage";
import CarsPage from "../pages/CarsPage";
import AddNewCarPage from "../pages/AddNewCarPage";
import EditCarPage from "../pages/EditCarPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<PublicRoute Children={<RenderLayout Children={<SignInPage />} />} />} />
      <Route exact path="/dashboard" element={<PrivateRoute Children={<AdminLayout Children={<DashboardPage />} />} />} />
      <Route exact path="/listcar" element={<PrivateRoute Children={<AdminLayout Children={<CarsPage />} />} />} />
      <Route exact path="/listcar/addnewcar" element={<PrivateRoute Children={<AdminLayout Children={<AddNewCarPage />} />} />} />
      <Route exact path="/listcar/editcar" element={<PrivateRoute Children={<AdminLayout Children={<EditCarPage />} />} />} />
    </>
  )
);

export default router;
