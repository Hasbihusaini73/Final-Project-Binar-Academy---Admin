import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CarsPage from "./CarsPage";

test("Render Cars Page", () => {
  const { getByText } = render(
    <Provider>
      <BrowserRouter>
        <CarsPage />
      </BrowserRouter>
    </Provider>
  );
  expect(getByText("List Car")).toBeInTheDocument();

  // Buntu karena redux bermasalah disini saat testing saja, Saya masih belum cukup paham perihal testing, apakah harus di buat skema/alur-nya dan tidak bisa langsung seperti ini? kalau seperti itu bukankah sama saja menulis code 2x?
});
