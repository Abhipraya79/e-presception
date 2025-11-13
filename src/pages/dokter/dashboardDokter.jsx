import React from 'react';
import Sidebar from '../../components/sidebar';
import { FileText, Users, Calendar, TrendingUp } from 'lucide-react';

const DashboardDokter = () => {
  const stats = [
    {
      title: 'Resep Hari Ini',
      value: '18',
      icon: FileText,
      color: '#f093fb',
      bgColor: 'rgba(240, 147, 251, 0.1)'
    },
    {
      title: 'Total Pasien',
      value: '234',
      icon: Users,
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    },
    {
      title: 'Jadwal Hari Ini',
      value: '12',
      icon: Calendar,
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Resep Bulan Ini',
      value: '342',
      icon: TrendingUp,
      color: '#8b5cf6',
      bgColor: 'rgba(139, 92, 246, 0.1)'
    }
  ];

  const recentPrescriptions = [
    { id: 'RSP101', patient: 'Ahmad Riyadi', diagnosis: 'Hipertensi', date: '13 Nov 2025', time: '09:30' },
    { id: 'RSP102', patient: 'Siti Nurhaliza', diagnosis: 'Diabetes', date: '13 Nov 2025', time: '10:15' },
    { id: 'RSP103', patient: 'Budi Santoso', diagnosis: 'Asma', date: '13 Nov 2025', time: '11:00' },
    { id: 'RSP104', patient: 'Dewi Lestari', diagnosis: 'Migrain', date: '13 Nov 2025', time: '11:45' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar userType="dokter" />
      
      <div className="main-content">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard Dokter</h1>
            <p>Selamat datang kembali! Berikut ringkasan praktik Anda hari ini.</p>
          </div>
          <div className="user-info">
            <span>{sessionStorage.getItem('dokterEmail')}</span>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: stat.bgColor }}>
                  <Icon size={28} style={{ color: stat.color }} />
                </div>
                <div className="stat-content">
                  <p className="stat-title">{stat.title}</p>
                  <h3 className="stat-value">{stat.value}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="recent-section">
          <h2>Resep Terbaru</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID Resep</th>
                  <th>Nama Pasien</th>
                  <th>Diagnosis</th>
                  <th>Tanggal</th>
                  <th>Waktu</th>
                </tr>
              </thead>
              <tbody>
                {recentPrescriptions.map((prescription) => (
                  <tr key={prescription.id}>
                    <td><strong>{prescription.id}</strong></td>
                    <td>{prescription.patient}</td>
                    <td>{prescription.diagnosis}</td>
                    <td>{prescription.date}</td>
                    <td>{prescription.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #f5f7fa;
        }

        .main-content {
          flex: 1;
          margin-left: 260px;
          padding: 30px;
          transition: margin-left 0.3s ease;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .dashboard-header h1 {
          font-size: 32px;
          color: #1e293b;
          margin-bottom: 5px;
        }

        .dashboard-header p {
          color: #64748b;
          font-size: 16px;
        }

        .user-info {
          background: white;
          padding: 12px 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          color: #475569;
          font-size: 14px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: transform 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-content {
          flex: 1;
        }

        .stat-title {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
        }

        .recent-section {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .recent-section h2 {
          font-size: 20px;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .table-container {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: #f8fafc;
        }

        th {
          padding: 12px;
          text-align: left;
          font-weight: 600;
          color: #475569;
          font-size: 14px;
        }

        td {
          padding: 15px 12px;
          border-bottom: 1px solid #e2e8f0;
          color: #334155;
        }

        tbody tr:hover {
          background: #f8fafc;
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 70px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardDokter;