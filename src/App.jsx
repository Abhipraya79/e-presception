import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { SidebarProvider } from './components/SidebarContext';

// Import Components
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages
import LoginSelector from './pages/LoginSelector';

// Apoteker Pages
import LoginApoteker from './pages/apoteker/LoginApoteker';
import DashboardApoteker from './pages/apoteker/DashboardApoteker';
import FormPlanPenjualan from './pages/apoteker/FormPlanPenjualan';
import LoginDokter from './pages/dokter/LoginDokter';
import DashboardDokter from './pages/dokter/DashboardDokter';
import FormResep from './pages/dokter/formResep';

function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <Routes>
          {/* Default Route - Login Selector */}
          <Route path="/" element={<LoginSelector />} />

          {/* Apoteker Routes */}
          <Route path="/apoteker/login" element={<LoginApoteker />} />
          <Route 
            path="/apoteker/dashboard" 
            element={
              <ProtectedRoute userType="apoteker">
                <DashboardApoteker />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/apoteker/form-plan-penjualan" 
            element={
              <ProtectedRoute userType="apoteker">
                <FormPlanPenjualan />
              </ProtectedRoute>
            } 
          />

          {/* Dokter Routes */}
          <Route path="/dokter/login" element={<LoginDokter />} />
          <Route 
            path="/dokter/dashboard" 
            element={
              <ProtectedRoute userType="dokter">
                <DashboardDokter />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dokter/form-resep" 
            element={
              <ProtectedRoute userType="dokter">
                <FormResep />
              </ProtectedRoute>
            } 
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </SidebarProvider>
  );
}

export default App;