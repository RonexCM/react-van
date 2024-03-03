import "./App.css";
import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVan, { loader as hostVanLoader } from "./pages/Host/HostVan.jsx";
import HostVanDetail, {
  loader as HostVanDetailLoader,
} from "./pages/Host/HostVanDetail.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhoto from "./pages/Host/HostVanPhoto.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />

      <Route path="vans">
        <Route
          index
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path=":id" element={<VanDetail />} loader={vanDetailLoader} />
      </Route>

      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route path="vans" element={<HostVan />} loader={hostVanLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={HostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhoto />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
