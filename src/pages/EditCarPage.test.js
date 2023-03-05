import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EditCarPage from "./EditCarPage";

test("Render Edit Page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <EditCarPage />
    </BrowserRouter>
  );
  expect(getByText("Edit Car")).toBeInTheDocument();

  // saya buntu karena belum tau caranya bikin mock data untuk uselocation state
});
