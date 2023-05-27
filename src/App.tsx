import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//context
import { AppContextProvider } from "./context/AppContext";

//Pages
import LandingPage from "./pages/LandingPage/";
import AdminPage from "./pages/AdminPage/AdminPage";

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  let title = '';
  if(pathname === "/statistics/goals"){
    title = "Goal";
  }else if(pathname === "/statistics/assists"){
    title = "Assist";
  }else if(pathname === "/statistics/clean-sheets"){
    title = "Clean Sheet";
  }else if(pathname === "/statistics/yellow-cards"){
    title = "Yellow Card";
  }else if(pathname === "/statistics/red-cards"){
    title = "Red Card";
  }

  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* landing Page route */}
            <Route path="/" element={<LandingPage />} />
            {/* public routes */}

            <Route path="/statistics/goals" element={<AdminPage /> } />
            {/* <Route  path="/statistics/goals" render={() => <AdminPage title={title} />} /> */}
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
