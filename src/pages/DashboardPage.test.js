import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./DashboardPage";

test("Render Dashboard Page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  );
  expect(getByText("Rented Car Data Visualization")).toBeInTheDocument();
});
