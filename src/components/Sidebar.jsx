import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  LogOut, 
  Menu, 
  X,
  Pill,
  Stethoscope
} from 'lucide-react';

const Sidebar = ({ userType }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    sessionStorage.removeItem(`${userType}Authenticated`);
    navigate('/');
  };

  const menuItems = userType === 'apoteker' 
    ? [
        { path: '/apoteker/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/apoteker/form-plan-penjualan', icon: FileText, label: 'Form Plan Penjualan' },
      ]
    : [
        { path: '/dokter/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/dokter/form-resep', icon: FileText, label: 'Form Resep' },
      ];

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-brand">
            {userType === 'apoteker' ? <Pill size={24} /> : <Stethoscope size={24} />}
            {isOpen && (
              <span>
                {userType === 'apoteker' ? 'Apoteker' : 'Dokter'} Panel
              </span>
            )}
          </div>
          <button 
            className="toggle-btn" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                {isOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%);
          color: white;
          transition: width 0.3s ease;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        }

        .sidebar.open {
          width: 260px;
        }

        .sidebar.closed {
          width: 70px;
        }

        .sidebar-header {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          font-size: 18px;
        }

        .toggle-btn {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .toggle-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar-nav {
          flex: 1;
          padding: 20px 0;
          overflow-y: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.2s;
          margin: 4px 10px;
          border-radius: 8px;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .nav-item.active {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          font-weight: 500;
        }

        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 14px 20px;
          background: rgba(239, 68, 68, 0.2);
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          font-size: 14px;
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        .sidebar.closed .sidebar-brand span,
        .sidebar.closed .nav-item span,
        .sidebar.closed .logout-btn span {
          display: none;
        }

        .sidebar.closed .sidebar-header {
          justify-content: center;
        }

        .sidebar.closed .toggle-btn {
          margin-left: 0;
        }
      `}</style>
    </>
  );
};

export default Sidebar;