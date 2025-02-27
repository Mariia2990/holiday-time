import { Suspense, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import ModalHeader from "./components/ModalHeader/ModalHeader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const ReservationPage = lazy(
  () => import("./pages/ReservationPage/ReservationPage")
);
const ReservationDetailPage = lazy(
  () => import("./pages/ReservationDetailPage/ReservationDetailPage")
);
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const PersonalOffice = lazy(
  () => import("./pages/PersonalOffice/PersonalOffice")
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = (): void => setIsMenuOpen(true);
  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <>
      <Header openMenu={openMenu} />
      <ModalHeader isOpen={isMenuOpen} onClose={closeMenu} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/reservation" element={<ReservationPage />}>
            <Route path=":reservationId" element={<ReservationDetailPage />} />
          </Route>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/office" element={<PersonalOffice />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
