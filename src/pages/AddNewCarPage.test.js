import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddNewCarPage from "./AddNewCarPage";

test("Render Add New Car Page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <AddNewCarPage />
    </BrowserRouter>
  );
  expect(getByText("Nama/Tipe Mobil")).toBeInTheDocument();
});
