import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pill, Stethoscope, ArrowRight } from 'lucide-react';

const LoginSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="login-selector-container">
      <div className="selector-content">
        <div className="header">
          <h1>E-RESEP</h1>
          <p>Sistem Manajemen Resep Digital</p>
        </div>

        <div className="cards-container">
          {/* Apoteker Card */}
          <div 
            className="user-card apoteker-card"
            onClick={() => navigate('/apoteker/login')}
          >
            <div className="card-icon">
              <Pill size={48} />
            </div>
            <h2>Apoteker</h2>
            <p>Kelola resep dan penjualan obat</p>
            <button className="card-button">
              Masuk sebagai Apoteker
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Dokter Card */}
          <div 
            className="user-card dokter-card"
            onClick={() => navigate('/dokter/login')}
          >
            <div className="card-icon">
              <Stethoscope size={48} />
            </div>
            <h2>Dokter</h2>
            <p>Buat dan kelola resep pasien</p>
            <button className="card-button">
              Masuk sebagai Dokter
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .login-selector-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .selector-content {
          max-width: 900px;
          width: 100%;
        }

        .header {
          text-align: center;
          color: white;
          margin-bottom: 50px;
        }

        .header h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .header p {
          font-size: 18px;
          opacity: 0.95;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .user-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .user-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .apoteker-card .card-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .dokter-card .card-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .user-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .user-card h2 {
          font-size: 28px;
          margin-bottom: 10px;
          color: #333;
        }

        .user-card p {
          color: #666;
          margin-bottom: 25px;
          font-size: 16px;
        }

        .card-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px 24px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .apoteker-card .card-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .dokter-card .card-button {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .card-button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 36px;
          }

          .cards-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginSelector;