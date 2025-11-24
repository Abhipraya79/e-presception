import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pill, Stethoscope } from 'lucide-react';
import backgroundImage from '../assets/OIP.jpg';

const LoginSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="login-selector-container">
      <div className="background-overlay"></div>
      <div className="selector-content">
        <div className="header">
          <h1>E-RESEP</h1>
          <p>Sistem Manajemen Resep Digital</p>
        </div>

        <div className="cards-container">
          {/* Apoteker Card */}
          <div 
            className="user-card"
            onClick={() => navigate('/apoteker/login')}
          >
            <div className="card-icon apoteker-icon">
              <Pill size={40} />
            </div>
            <h2>Apoteker</h2>
            <p>Kelola resep dan penjualan obat</p>
          </div>

          {/* Dokter Card */}
          <div 
            className="user-card"
            onClick={() => navigate('/dokter/login')}
          >
            <div className="card-icon dokter-icon">
              <Stethoscope size={40} />
            </div>
            <h2>Dokter</h2>
            <p>Buat dan kelola resep pasien</p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .login-selector-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .selector-content {
          max-width: 800px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .header {
          text-align: center;
          color: white;
          margin-bottom: 60px;
        }

        .header h1 {
          font-size: 52px;
          font-weight: 700;
          margin-bottom: 12px;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
          letter-spacing: 2px;
        }

        .header p {
          font-size: 18px;
          opacity: 0.95;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
          font-weight: 300;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          padding: 0 20px;
        }

        .user-card {
          background: white;
          border-radius: 12px;
          padding: 45px 35px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .user-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .card-icon {
          width: 90px;
          height: 90px;
          margin: 0 auto 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .apoteker-icon {
          background: #4318FF;
          color: white;
        }

        .dokter-icon {
          background: #4318FF;
          color: white;
        }

        .user-card:hover .card-icon {
          transform: scale(1.08);
        }

        .user-card h2 {
          font-size: 26px;
          margin-bottom: 12px;
          color: #1a1a1a;
          font-weight: 600;
        }

        .user-card p {
          color: #666;
          margin-bottom: 0;
          font-size: 15px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 40px;
          }

          .header p {
            font-size: 16px;
          }

          .cards-container {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 10px;
          }

          .user-card {
            padding: 40px 30px;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 32px;
          }

          .header {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginSelector;