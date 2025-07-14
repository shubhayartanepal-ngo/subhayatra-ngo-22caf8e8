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
  Contact,
  PhotoGallery,
  BiodiversityProgram,
  HumanitarianProgram,
  CowSanctuariesInitiative,
  CleanerGreenerNepalMovement,
  TouristRouteDevelopment,
  VideoGallery,
  NewsDetail,
} from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* Define your routes here */}
        <Route index element={<HomePage />} />

        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/photo" element={<PhotoGallery />} />
        <Route path="/gallery/video" element={<VideoGallery />} />
        <Route
          path="/programs/biodiversityprogram"
          element={<BiodiversityProgram />}
        />
        <Route
          path="/programs/humanitarianprogram"
          element={<HumanitarianProgram />}
        />
        <Route
          path="/programs/cowsanctuariesinitiative"
          element={<CowSanctuariesInitiative />}
        />
        <Route
          path="/programs/cleanergreenernepalmovement"
          element={<CleanerGreenerNepalMovement />}
        />
        <Route
          path="/programs/touristroutedevelopment"
          element={<TouristRouteDevelopment />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
