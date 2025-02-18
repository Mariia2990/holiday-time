import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import "./App.css";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const ReservationPage = lazy(() => import("./pages/ReservationPage/ReservationPage"));
const HomeReserve = lazy(() => import("./components/HomeReserve/HomeReserve"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const PersonalOffice = lazy(() => import("./pages/PersonalOffice/PersonalOffice")
);

const App = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route
            path="/reservation/:reservationId/"
            element={<ReservationPage />}
          >
            <Route path="reserve" element={<HomeReserve />} />
          </Route>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/office" element={<PersonalOffice />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
