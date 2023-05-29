import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//context
import { AppContextProvider } from "./context/AppContext";

//Pages
import LandingPage from "./pages/LandingPage/";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* landing Page route */}
            <Route path="/" element={<LandingPage />} />
            {/* public routes */}

            <Route path="/statistics/goals" element={<AdminPage />} />
            <Route path="/statistics/assists" element={<AdminPage />} />
            <Route path="/statistics/clean-sheets" element={<AdminPage />} />
            <Route path="/statistics/yellow-cards" element={<AdminPage />} />
            <Route path="/statistics/red-cards" element={<AdminPage />} />
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
