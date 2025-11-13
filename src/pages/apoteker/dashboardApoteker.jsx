import React from 'react';
import Sidebar from '../../components/sidebar';
import { Package, TrendingUp, AlertCircle, Users } from 'lucide-react';

const DashboardApoteker = () => {
  const stats = [
    {
      title: 'Resep Hari Ini',
      value: '24',
      icon: Package,
      color: '#667eea',
      bgColor: 'rgba(102, 126, 234, 0.1)'
    },
    {
      title: 'Total Penjualan',
      value: 'Rp 4.5 Jt',
      icon: TrendingUp,
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    },
    {
      title: 'Stok Menipis',
      value: '8',
      icon: AlertCircle,
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Pasien Aktif',
      value: '156',
      icon: Users,
      color: '#8b5cf6',
      bgColor: 'rgba(139, 92, 246, 0.1)'
    }
  ];

  const recentOrders = [
    { id: 'RSP001', patient: 'Ahmad Riyadi', items: 3, status: 'Selesai', time: '10:30' },
    { id: 'RSP002', patient: 'Siti Nurhaliza', items: 2, status: 'Proses', time: '11:15' },
    { id: 'RSP003', patient: 'Budi Santoso', items: 5, status: 'Menunggu', time: '11:45' },
    { id: 'RSP004', patient: 'Dewi Lestari', items: 1, status: 'Selesai', time: '12:00' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar userType="apoteker" />
      
      <div className="main-content">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard Apoteker</h1>
            <p>Selamat datang kembali! Berikut ringkasan hari ini.</p>
          </div>
          <div className="user-info">
            <span>{sessionStorage.getItem('apotekerEmail')}</span>
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
                  <th>Jumlah Item</th>
                  <th>Status</th>
                  <th>Waktu</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td><strong>{order.id}</strong></td>
                    <td>{order.patient}</td>
                    <td>{order.items} item</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.time}</td>
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

        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .status-badge.selesai {
          background: #d1fae5;
          color: #065f46;
        }

        .status-badge.proses {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-badge.menunggu {
          background: #fef3c7;
          color: #92400e;
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

export default DashboardApoteker;