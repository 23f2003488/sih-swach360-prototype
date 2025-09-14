import { useState, useEffect } from 'react'; // Import useEffect
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initialReports } from './dummyData';

// Import Pages and Components
import LoginPage from './pages/LoginPage';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import ChampionDashboard from './pages/ChampionDashboard';
import CitizenDashboard from './pages/CitizenDashboard';
import CitizenLayout from './components/CitizenLayout';
import FacilitiesMapPage from './pages/FacilitiesMapPage';
import TrainingPage from './pages/TrainingPage';
import WorkerDashboard from './pages/WorkerDashboard';
import ReportNonCompliancePage from './pages/ReportNonCompliancePage';
import VerifyReportsPage from './pages/VerifyReportsPage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import WorkerRouteMapPage from './pages/WorkerRouteMapPage';
import ChampionLayout from './components/ChampionLayout';
import ChampionAreaDashboard from './pages/ChampionAreaDashboard';
import CitizenFacilitiesMap from './pages/CitizenFacilitiesMap';
import UserManagementPage from './pages/UserManagementPage';

function App() {
  // 1. READ from LocalStorage when the app first loads
  const [reports, setReports] = useState(() => {
    const savedReports = localStorage.getItem('reports');
    return savedReports ? JSON.parse(savedReports) : initialReports;
  });

  // 2. SAVE to LocalStorage every time the 'reports' state changes
  useEffect(() => {
    localStorage.setItem('reports', JSON.stringify(reports));
  }, [reports]);


  const addReport = (newReport) => {
    const reportWithId = { ...newReport, id: reports.length + 1 };
    setReports([reportWithId, ...reports]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard reports={reports} />} />
          <Route path="facilities" element={<FacilitiesMapPage />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          <Route path="users" element={<UserManagementPage />} />
        </Route>

        <Route path="/champion" element={<ChampionLayout />}>
          <Route index element={<ChampionDashboard onAddReport={addReport} />} />
          <Route path="map" element={<ChampionAreaDashboard />} />
        </Route>

        <Route path="/citizen" element={<CitizenLayout />}>
          <Route index element={<CitizenDashboard />} />
          <Route path="training" element={<TrainingPage />} /> {/* Add this line */}
          <Route path="report" element={<ReportNonCompliancePage />} />
          <Route path="facilities" element={<CitizenFacilitiesMap />} /> 
        </Route>

        <Route path="/worker" element={<WorkerDashboard />} />
        <Route path="/worker/map" element={<WorkerRouteMapPage />} />

        <Route path="/champion/verify" element={<VerifyReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;