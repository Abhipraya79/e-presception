import React from 'react';
import Sidebar from '../../components/sidebar';
import { useSidebar } from '../../components/SidebarContext'; // Import context
import { Bell, FileEdit, Monitor, Clock, CheckCircle, Grid } from 'lucide-react';
import logoImage from '../../assets/OIP2.jpg';

const DashboardApoteker = () => {
  const { isOpen } = useSidebar(); // Ambil state sidebar

  const stats = [
    {
      title: 'Jumlah Resep Hari Ini',
      value: '9',
      icon: Bell,
      color: '#3b82f6',
      bgColor: '#dbeafe'
    },
    {
      title: 'Resep Hari Ini',
      value: '13',
      icon: FileEdit,
      color: '#f59e0b',
      bgColor: '#fef3c7'
    },
    {
      title: 'Antrian',
      value: '6',
      icon: Monitor,
      color: '#fbbf24',
      bgColor: '#fef3c7'
    },
    {
      title: 'Sedang Menunggu Verifikasi',
      value: '1',
      icon: Clock,
      color: '#3b82f6',
      bgColor: '#dbeafe'
    },
    {
      title: 'Resep Telah Verifikasi',
      value: '8',
      icon: CheckCircle,
      color: '#3b82f6',
      bgColor: '#dbeafe'
    }
  ];

  return (
    <div className="dashboard-container">
      <Sidebar userType="apoteker" />
      
      <div className={`main-content ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="dashboard-header">
          <div className="logo-section">
            <img src={logoImage} alt="Logo RSM" className="logo-image" />
            <div className="header-text">
              <h1>Rumah Sakit Muhammadiyah Lamongan</h1>
              <p className="subtitle">Jl. Jaksa Agung Suprapto 68 Lamongan</p>
            </div>
          </div>
        </div>

        <div className="page-title">
          <h2>Dashboard E-Resep</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-header" style={{ backgroundColor: stat.color }}>
                  <span>{stat.title}</span>
                </div>
                <div className="stat-body">
                  <Icon size={40} style={{ color: '#666' }} />
                  <h3 className="stat-value">{stat.value}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="welcome-section">
          <div className="welcome-card">
            <h3>Selamat Datang (Nama Apoteker)</h3>
            <p>
              Melalui halaman ini, Anda dapat dengan mudah memantau jumlah resep yang telah dibuat,
              melihat resep yang menunggu verifikasi, serta mengakses riwayat resep pasien secara real-time.
              Silakan gunakan tombol di bawah untuk membuat resep baru atau meninjau daftar resep yang
              telah dibuat. Semua aktivitas Anda tercatat dengan rapi untuk mendukung pelayanan yang
              cepat, akurat, dan terintegrasi.
            </p>
          </div>

          <div className="action-cards">
            <button className="action-card-btn blue">
              <div className="btn-content">
                <FileEdit size={40} />
                <span>Form Penjualan E-Resep</span>
              </div>
            </button>

            <button className="action-card-btn green">
              <div className="btn-content">
                <Grid size={50} />
                <span>Penjualan Tabel Apoteker</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #f5f5f5;
        }

        .main-content {
          flex: 1;
          transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-content.sidebar-open {
          margin-left: 260px;
        }

        .main-content.sidebar-closed {
          margin-left: 70px;
        }

        .dashboard-header {
          background: linear-gradient(135deg, #7ed321 0%, #5fb80e 100%);
          padding: 15px 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          background: white;
          padding: 3px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .header-text h1 {
          font-size: 20px;
          color: white;
          margin: 0;
          font-weight: 700;
        }

        .subtitle {
          font-size: 12px;
          color: white;
          margin: 2px 0 0 0;
          opacity: 0.95;
        }

        .page-title {
          background: white;
          padding: 20px 30px;
          border-bottom: 3px solid #e5e7eb;
        }

        .page-title h2 {
          font-size: 24px;
          color: #1a1a1a;
          margin: 0;
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 30px;
        }

        .stat-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .stat-header {
          padding: 12px 15px;
          color: white;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
        }

        .stat-body {
          background: #f8f9fa;
          padding: 25px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .stat-value {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .welcome-section {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 20px;
          padding: 0 30px 30px 30px;
        }

        .welcome-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .welcome-card h3 {
          font-size: 20px;
          color: #1a1a1a;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .welcome-card p {
          color: #4b5563;
          line-height: 1.7;
          font-size: 14px;
          text-align: justify;
        }

        .action-cards {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .action-card-btn {
          border: none;
          border-radius: 8px;
          padding: 30px 25px;
          cursor: pointer;
          transition: all 0.3s;
          text-align: center;
        }

        .action-card-btn.blue {
          background: linear-gradient(135deg, #4318FF 0%, #3614cc 100%);
          box-shadow: 0 4px 12px rgba(67, 24, 255, 0.3);
        }

        .action-card-btn.blue:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(67, 24, 255, 0.4);
        }

        .action-card-btn.green {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .action-card-btn.green:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .btn-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: white;
        }

        .btn-content svg {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .btn-content span {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        @media (max-width: 1200px) {
          .welcome-section {
            grid-template-columns: 1fr;
          }

          .action-cards {
            max-width: 320px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .main-content.sidebar-open,
          .main-content.sidebar-closed {
            margin-left: 0;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .welcome-section {
            padding: 0 20px 20px 20px;
          }

          .dashboard-header {
            padding: 15px 20px;
          }

          .header-text h1 {
            font-size: 16px;
          }

          .subtitle {
            font-size: 11px;
          }

          .logo-image {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardApoteker;