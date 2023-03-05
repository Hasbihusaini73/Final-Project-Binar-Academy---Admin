import { render, screen } from "@testing-library/react";
import App from "../App";
import SignInPage from "./SignInPage";

test("Render Sign in Page", () => {
  render(
    <App>
      <SignInPage />
    </App>
  );
  const Title = screen.getByText(/Welcome, Admin BCR/i);
  expect(Title).toBeInTheDocument();
});
