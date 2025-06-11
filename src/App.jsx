import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/fonts/flaticon.css";
import "slick-carousel"; // attaches `.slick()` to jQuery
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from "./layouts/MainLayout/MainLayout";
import {
  HomePage,
  // AboutPage,
  // MbaPage,
  // BbaPage,
  Contact,
  // BitPage,
  // TeamPage,
  PhotoGallery,
} from "./pages";
// import PhotoGallery from "./pages/gallery/PhotoGallery";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* Define your routes here */}
        <Route index element={<HomePage />} />

        <Route path="/gallery/photo" element={<PhotoGallery />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
