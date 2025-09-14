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
        </Route>

        <Route path="/champion" element={<ChampionDashboard onAddReport={addReport} />} />
        
        <Route path="/citizen" element={<CitizenLayout />}>
          <Route index element={<CitizenDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;