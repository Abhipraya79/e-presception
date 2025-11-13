import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pill, Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';

const LoginApoteker = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
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
    
    // Simple validation (Untuk production, gunakan backend API)
    if (formData.email === 'apoteker@eresep.com' && formData.password === 'apoteker123') {
      sessionStorage.setItem('apotekerAuthenticated', 'true');
      sessionStorage.setItem('apotekerEmail', formData.email);
      navigate('/apoteker/dashboard');
    } else {
      setError('Email atau password salah!');
    }
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Kembali
      </button>

      <div className="login-card">
        <div className="login-icon">
          <Pill size={48} />
        </div>
        
        <h1>Login Apoteker</h1>
        <p className="subtitle">Masuk ke akun apoteker Anda</p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <Mail size={20} className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="apoteker@eresep.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Masukkan password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Masuk
          </button>
        </form>

        <div className="demo-info">
          <p><strong>Demo Credentials:</strong></p>
          <p>Email: apoteker@eresep.com</p>
          <p>Password: apoteker123</p>
        </div>
      </div>

      <style jsx="true">{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          position: relative;
        }

        .back-button {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 14px;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .login-card {
          background: white;
          border-radius: 20px;
          padding: 50px 40px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .login-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 10px;
          font-size: 32px;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 30px;
        }

        .error-message {
          background: #fee;
          color: #c33;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
          border: 1px solid #fcc;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          color: #999;
        }

        input {
          width: 100%;
          padding: 14px 45px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s;
        }

        input:focus {
          outline: none;
          border-color: #667eea;
        }

        .toggle-password {
          position: absolute;
          right: 15px;
          background: none;
          border: none;
          color: #999;
          cursor: pointer;
          padding: 0;
        }

        .submit-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 10px;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .demo-info {
          margin-top: 30px;
          padding: 15px;
          background: #f5f5f5;
          border-radius: 8px;
          text-align: center;
          font-size: 14px;
          color: #666;
        }

        .demo-info p {
          margin: 5px 0;
        }

        @media (max-width: 768px) {
          .login-card {
            padding: 40px 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginApoteker;