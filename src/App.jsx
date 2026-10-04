import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dash";
import RiskMap from "./pages/RiskMap";
import Monitoring from "./pages/Monitoring";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="logo">
            🌊 FLOODGUARD
          </div>

          <p className="subtitle">
            FLOOD EARLY WARNING SYSTEM
          </p>

          <nav>

            <NavLink to="/">
              📊 Dashboard
            </NavLink>

            <NavLink to="/map">
              🗺️ Risk Map
            </NavLink>

            <NavLink to="/monitoring">
              📡 Live Monitoring
            </NavLink>

            <NavLink to="/alerts">
              🚨 Alerts & Response
            </NavLink>

            <NavLink to="/analytics">
              🤖 ML Analytics
            </NavLink>

          </nav>

        </aside>


        {/* MAIN CONTENT */}
        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/map"
              element={<RiskMap />}
            />

            <Route
              path="/monitoring"
              element={<Monitoring />}
            />

            <Route
              path="/alerts"
              element={<Alerts />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
