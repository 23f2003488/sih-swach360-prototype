import { useState, useEffect } from 'react'; // Import useEffect
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initialReports } from './dummyData';

// Import Pages and Components
import LoginPage from './pages/LoginPage';
import { LanguageProvider } from './context/LanguageContext';

import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import FacilitiesMapPage from './pages/admin/FacilitiesMapPage';
import AnalyticsDashboard from './pages/admin/AnalyticsDashboard';
import UserManagementPage from './pages/admin/UserManagementPage';
import WardLeaderboardPage from './pages/admin/WardLeaderboardPage';

import ChampionLayout from './components/ChampionLayout';
import ChampionDashboard from './pages/champion/ChampionDashboard';
import FileReportPage from './pages/champion/FileReportPage';
import ReportsHistoryPage from './pages/champion/ReportsHistoryPage';
import ChampionAnalyticsPage from './pages/champion/ChampionAnalyticsPage';
import ChampionLeaderboardPage from './pages/champion/ChampionLeaderboardPage';

import CitizenDashboard from './pages/citizens/CitizenDashboard';
import CitizenLayout from './components/CitizenLayout';
import TrainingPage from './pages/citizens/TrainingPage';
import ReportNonCompliancePage from './pages/citizens/ReportNonCompliancePage';
import CitizenFacilitiesMap from './pages/citizens/CitizenFacilitiesMap';
import NotificationsPage from './pages/citizens/NotificationsPage';
import Module1Page from './pages/training/Module1Page';
import Module2Page from './pages/training/Module2Page';
import Module3Page from './pages/training/Module3Page';

import WorkerLayout from './components/WorkerLayout';
import WorkerDashboard from './pages/worker/WorkerDashboard';
import ScanQRPage from './pages/worker/ScanQRPage';
import WorkerTrainingPage from './pages/worker/WorkerTrainingPage';
import WorkerNotificationsPage from './pages/worker/WorkerNotificationsPage';
import RequestGearPage from './pages/worker/RequestGearPage';
import ScrapMarketplacePage from './pages/worker/ScrapMarketplacePage';
import LodgeComplaintPage from './pages/worker/LodgeComplaintPage';

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
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard reports={reports} />} />
            <Route path="analytics" element={<AnalyticsDashboard />} />
            <Route path="facilities" element={<FacilitiesMapPage />} />
            <Route path="users" element={<UserManagementPage />} />
            <Route path="leaderboard" element={<WardLeaderboardPage />} /> {/* Add this line */}
          </Route>

          <Route path="/champion" element={<ChampionLayout />}>
            <Route index element={<ChampionDashboard />} />
            <Route path="leaderboard" element={<ChampionLeaderboardPage />} />
            <Route path="file-report" element={<FileReportPage />} />
            <Route path="reports" element={<ReportsHistoryPage />} />
            <Route path="analytics" element={<ChampionAnalyticsPage />} />
          </Route>

          <Route path="/citizen" element={<CitizenLayout />}>
            <Route index element={<CitizenDashboard />} />
            <Route path="training" element={<TrainingPage />} />
            <Route path="training/module1" element={<Module1Page />} />
            <Route path="training/module2" element={<Module2Page />} />
            <Route path="training/module3" element={<Module3Page />} />
            <Route path="report" element={<ReportNonCompliancePage />} />
            <Route path="facilities" element={<CitizenFacilitiesMap />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="leaderboard" element={<ChampionLeaderboardPage />} />
          </Route>

          <Route path="/worker" element={<WorkerLayout />}>
            <Route index element={<WorkerDashboard />} />
            <Route path="scan-qr" element={<ScanQRPage />} />
            <Route path="training" element={<WorkerTrainingPage />} />
            <Route path="notifications" element={<WorkerNotificationsPage />} />
            <Route path="gear" element={<RequestGearPage />} />
            <Route path="complaint" element={<LodgeComplaintPage />} />
            <Route path="marketplace" element={<ScrapMarketplacePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;