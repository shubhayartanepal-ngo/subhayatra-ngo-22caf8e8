import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// import "./assets/css/bootstrap.css";

// import "./assets/css/font-awesome.css";
// import "./assets/css/fontawsome.min.css";
// import "./assets/css/ionicon.css";
// import "./assets/css/royal-preload.css";
// import "./assets/css/slick.css";
// import "./assets/css/slick-theme.css";
// import "../src/index.css";
// import "slick-carousel/slick/slick.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
