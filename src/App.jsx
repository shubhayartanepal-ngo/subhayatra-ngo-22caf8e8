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
  Committee,
  Advisory,
  OurTeam,
  Award,
  OtherAchievement,
  BiodiversityProgram,
  HumanitarianProgram,
  CowSanctuariesInitiative,
  CleanerGreenerNepalMovement,
  TouristRouteDevelopment,
  PhotoGallery,
  VideoGallery,
  NewsDetail,
} from "./pages";
import NewsEvents from "./pages/NewsEvents";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Login route - standalone, no MainLayout */}

        {/* Main routes with MainLayout wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* Define your routes here */}
          <Route index element={<HomePage />} />
          <Route path="/newsevents" element={<NewsEvents />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* About Us routes */}

          <Route path="/committee" element={<Committee />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/ourteam" element={<OurTeam />} />

          {/* Achievements routes */}

          <Route path="/award" element={<Award />} />
          <Route path="/otherachievement" element={<OtherAchievement />} />

          {/* Programs routes */}

          <Route
            path="/biodiversityprogram"
            element={<BiodiversityProgram />}
          />
          <Route
            path="/humanitarianprogram"
            element={<HumanitarianProgram />}
          />
          <Route
            path="/cowsanctuariesinitiative"
            element={<CowSanctuariesInitiative />}
          />
          <Route
            path="/cleanergreenernepalmovement"
            element={<CleanerGreenerNepalMovement />}
          />
          <Route
            path="/touristroutedevelopment"
            element={<TouristRouteDevelopment />}
          />

          {/* Gallery routes */}

          <Route path="/gallery/photo" element={<PhotoGallery />} />
          <Route path="/gallery/video" element={<VideoGallery />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
