import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, ArrowLeft } from 'lucide-react';
import backgroundImage from '../../assets/OIP.jpg';

const LoginDokter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.email === 'dokter@eresep.com' && formData.password === 'dokter123') {
      sessionStorage.setItem('dokterAuthenticated', 'true');
      sessionStorage.setItem('dokterEmail', formData.email);
      navigate('/dokter/dashboard');
    } else {
      setError('Email atau password salah!');
    }
  };

  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Kembali
      </button>

      <div className="login-card">
        <h1>Login Dokter</h1>
        <p className="subtitle">Enter your credentials to access your account</p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            SIGN IN
          </button>

          <div className="forgot-password">
            Forgot your password? <a href="#reset">Reset Password</a>
          </div>
        </form>
      </div>

      <style jsx="true">{`
        .login-container {
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

        .back-button {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 14px;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: translateX(-3px);
        }

        .login-card {
          background: white;
          border-radius: 12px;
          padding: 50px 45px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 2;
        }

        h1 {
          text-align: center;
          color: #1a1a1a;
          margin-bottom: 8px;
          font-size: 28px;
          font-weight: 600;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 35px;
          font-size: 14px;
          font-weight: 400;
        }

        .error-message {
          background: #fee;
          color: #c33;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 20px;
          text-align: center;
          border: 1px solid #fcc;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
          font-size: 14px;
        }

        input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          transition: all 0.3s;
          box-sizing: border-box;
        }

        input:focus {
          outline: none;
          border-color: #f093fb;
          box-shadow: 0 0 0 3px rgba(240, 147, 251, 0.1);
        }

        input::placeholder {
          color: #aaa;
        }

        .submit-button {
          width: 100%;
          padding: 14px;
          background: #4318FF;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 10px;
          letter-spacing: 0.5px;
        }

        .submit-button:hover {
          background: #3614cc;
          box-shadow: 0 4px 12px rgba(67, 24, 255, 0.3);
        }

        .forgot-password {
          margin-top: 20px;
          text-align: center;
          font-size: 13px;
          color: #666;
        }

        .forgot-password a {
          color: #4318FF;
          text-decoration: none;
          font-weight: 500;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .login-card {
            padding: 40px 30px;
            max-width: 380px;
          }

          .back-button {
            top: 10px;
            left: 10px;
            padding: 8px 16px;
            font-size: 13px;
          }

          h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginDokter;