import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Layout
import UpdateStatisticsPage from "./utils/UpdateStatisticsPage";

//context
import { AppContextProvider } from "./context/AppContext";

//Pages
import LandingPage from "./pages/LandingPage/";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* landing Page route */}
            <Route path="/" element={<LandingPage />} />
            {/* public routes */}

            <Route
              path="/statistics/goals"
              element={<UpdateStatisticsPage />}
            />
            <Route
              path="/statistics/assists"
              element={<UpdateStatisticsPage />}
            />
            <Route
              path="/statistics/clean-sheets"
              element={<UpdateStatisticsPage />}
            />
            <Route
              path="/statistics/yellow-cards"
              element={<UpdateStatisticsPage />}
            />
            <Route
              path="/statistics/red-cards"
              element={<UpdateStatisticsPage />}
            />
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
