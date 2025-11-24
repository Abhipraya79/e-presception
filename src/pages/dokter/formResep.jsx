import React, { useState, useEffect } from "react";
import Sidebar from '../../components/sidebar';
import { useSidebar } from '../../components/SidebarContext';
import { Save, Eye, Plus, Trash2 } from 'lucide-react';
import logoImage from '../../assets/OIP2.jpg';
import { getObatPx } from "../../../api/getObat.js";

const FormResep = () => {
  const { isOpen } = useSidebar();
  const [showPreview, setShowPreview] = useState(false);
  
  const [formData, setFormData] = useState({
    idPx: '',
    namaPx: '',
    dokter: '',
    alamatPx: '',
    klasPx: '',
    tanggal: '',
    idPx2: '',
    uPx: '',
    bpjs: ''
  });

  const [selectedRacikan, setSelectedRacikan] = useState('1 dd 1');
  const [racikanNumber, setRacikanNumber] = useState('');
  const [listObat, setListObat] = useState([]);
  const [selectedObat, setSelectedObat] = useState("");
  const [isLoadingObat, setIsLoadingObat] = useState(false);

  const [obatList, setObatList] = useState([
    { id: 1, content: '', dosis: '', signa: '' }
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleObatChange = (id, field, value) => {
    const updated = obatList.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setObatList(updated);
  };

  const addObat = () => {
    setObatList([
      ...obatList,
      { id: Date.now(), content: '', dosis: '', signa: '' }
    ]);
  };

  const removeObat = (id) => {
    if (obatList.length > 1) {
      setObatList(obatList.filter(item => item.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Resep berhasil disimpan!');
  };

  // Load data obat from API
  const loadObat = async (searchTerm = "") => {
    try {
      setIsLoadingObat(true);
      const res = await getObatPx(searchTerm, 0, 50);
      
      console.log("Full API Response:", res);
      
      // Backend menggunakan 'response' bukan 'data'
      if (res && res.response && Array.isArray(res.response)) {
        console.log("Obat loaded:", res.response.length, "items");
        setListObat(res.response);
      } else if (res && res.data && Array.isArray(res.data)) {
        // Fallback jika menggunakan 'data'
        console.log("Obat loaded (data):", res.data.length, "items");
        setListObat(res.data);
      } else {
        console.warn("Format data tidak sesuai:", res);
        setListObat([]);
      }
    } catch (error) {
      console.error("Error loading obat:", error);
      setListObat([]);
    } finally {
      setIsLoadingObat(false);
    }
  };

  // Load obat saat component mount
  useEffect(() => {
    loadObat();
  }, []);

  // Handle obat selection
  const handleObatSelect = (e) => {
    const selectedKode = e.target.value;
    setSelectedObat(selectedKode);
    
    if (selectedKode) {
      const obat = listObat.find(o => o.kode === selectedKode);
      if (obat) {
        console.log("Selected Obat:", obat);
        // Bisa ditambahkan logic untuk auto-fill form atau melakukan action lain
      }
    }
  };

  return (
    <div className="form-container">
      <Sidebar userType="dokter" />
      
      <div className={`main-content ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Header */}
        <div className="page-header">
          <div className="logo-section">
            <img src={logoImage} alt="Logo RSM" className="logo-image" />
            <div className="header-text">
              <h1>Rumah Sakit Muhammadiyah Lamongan</h1>
              <p className="subtitle">Jl. Jaksa Agung Suprapto 68 Lamongan</p>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          {/* Left Panel - Form */}
          <div className="form-panel">
            <form onSubmit={handleSubmit}>
              {/* Patient Info Grid */}
              <div className="info-grid">
                <div className="section-title">Informasi Pasien (dari Appointment)</div>
                
                <div className="info-row">
                  <div className="form-group">
                    <label>ID Px</label>
                    <input
                      type="text"
                      name="idPx"
                      value={formData.idPx}
                      readOnly
                      placeholder="5270"
                      className="readonly-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>ID Px</label>
                    <input
                      type="text"
                      name="idPx2"
                      value={formData.idPx2}
                      readOnly
                      placeholder="5270"
                      className="readonly-input"
                    />
                  </div>
                </div>

                <div className="info-row">
                  <div className="form-group">
                    <label>Nama Px</label>
                    <input
                      type="text"
                      name="namaPx"
                      value={formData.namaPx}
                      readOnly
                      placeholder="Sunan Azmin"
                      className="readonly-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Tanggal</label>
                    <input
                      type="date"
                      name="tanggal"
                      value={formData.tanggal}
                      readOnly
                      placeholder="22/04/2025"
                      className="readonly-input"
                    />
                  </div>
                </div>

                <div className="info-row">
                  <div className="form-group">
                    <label>Dokter <span className="editable-badge">Editable</span></label>
                    <select
                      name="dokter"
                      value={formData.dokter}
                      onChange={handleInputChange}
                    >
                      <option value="">Pilih Dokter</option>
                      <option value="Filima Husya, dr">Filima Husya, dr</option>
                      <option value="Dr. Ahmad">Dr. Ahmad</option>
                      <option value="Dr. Siti">Dr. Siti</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>u/Px</label>
                    <input
                      type="text"
                      name="uPx"
                      value={formData.uPx}
                      readOnly
                      placeholder="BP/S"
                      className="readonly-input"
                    />
                  </div>
                </div>

                <div className="info-row">
                  <div className="form-group">
                    <label>Alamat PX</label>
                    <input
                      type="text"
                      name="alamatPx"
                      value={formData.alamatPx}
                      readOnly
                      placeholder="Jombokuro"
                      className="readonly-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>BPJS</label>
                    <input
                      type="text"
                      name="bpjs"
                      value={formData.bpjs}
                      readOnly
                      className="readonly-input"
                    />
                  </div>
                </div>

                <div className="info-row">
                  <div className="form-group full-width">
                    <label>Klas Px <span className="editable-badge">Editable</span></label>
                    <select
                      name="klasPx"
                      value={formData.klasPx}
                      onChange={handleInputChange}
                    >
                      <option value="">Pilih Kelas</option>
                      <option value="KLINIK/UMUM">KLINIK/UMUM</option>
                      <option value="BPJS Kelas 1">BPJS Kelas 1</option>
                      <option value="BPJS Kelas 2">BPJS Kelas 2</option>
                      <option value="BPJS Kelas 3">BPJS Kelas 3</option>
                      <option value="VIP">VIP</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Racikan Section */}
              <div className="racikan-section">
                <div className="racikan-header">
                  <div className="racikan-selector">
                    <label>R/</label>
                    <select
                      className="obat-select"
                      value={selectedObat}
                      onChange={handleObatSelect}
                      disabled={isLoadingObat}
                    >
                      <option value="">
                        {isLoadingObat ? "Loading obat..." : listObat.length === 0 ? "Tidak ada data obat" : "-- Pilih Obat --"}
                      </option>
                      {listObat.map((obat) => (
                        <option key={obat.kode} value={obat.kode}>
                          {obat.kode} — {obat.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="racikan-number">
                    <label>NO.</label>
                    <input
                      type="text"
                      value={racikanNumber}
                      onChange={(e) => setRacikanNumber(e.target.value)}
                      placeholder="Nomor"
                    />
                  </div>
                </div>

                <div className="signa-section">
                  <div className="signa-symbol">∫</div>
                  <select 
                    className="signa-select"
                    value={selectedRacikan}
                    onChange={(e) => setSelectedRacikan(e.target.value)}
                  >
                    <option value="1 dd 1">1 dd 1</option>
                    <option value="2 dd 1">2 dd 1</option>
                    <option value="3 dd 1">3 dd 1</option>
                  </select>
                </div>

                {/* Obat Table */}
                <div className="obat-table">
                  <div className="table-header">
                    <div className="col-content">Content</div>
                    <div className="col-dosis">Dosis (mg)</div>
                    <div className="col-signa">x/y</div>
                    <div className="col-action"></div>
                  </div>
                  {obatList.map((obat) => (
                    <div key={obat.id} className="table-row">
                      <div className="col-content">
                        <input
                          type="text"
                          value={obat.content}
                          onChange={(e) => handleObatChange(obat.id, 'content', e.target.value)}
                          placeholder="Nama obat"
                        />
                      </div>
                      <div className="col-dosis">
                        <input
                          type="text"
                          value={obat.dosis}
                          onChange={(e) => handleObatChange(obat.id, 'dosis', e.target.value)}
                          placeholder="Dosis"
                        />
                      </div>
                      <div className="col-signa">
                        <input
                          type="text"
                          value={obat.signa}
                          onChange={(e) => handleObatChange(obat.id, 'signa', e.target.value)}
                          placeholder="x/y"
                        />
                      </div>
                      <div className="col-action">
                        {obatList.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeObat(obat.id)}
                            className="delete-btn"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={addObat} className="add-row-btn">
                    <Plus size={16} /> Tambah Obat
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button type="button" className="action-btn green">
                  <span>List Resep</span>
                </button>
                <button type="button" className="action-btn green">
                  <Plus size={18} />
                  <span>Add</span>
                </button>
                <button type="button" className="action-btn green">
                  <span>Template</span>
                </button>
                <button type="button" className="action-btn green">
                  <Save size={18} />
                  <span>Setelah/Temp</span>
                </button>
                <button type="button" className="action-btn green">
                  <span>Approve Code</span>
                </button>
                <button 
                  type="button" 
                  className="action-btn green"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  <Eye size={18} />
                  <span>Look Like</span>
                </button>
              </div>

              {/* Bottom Info */}
              <div className="bottom-info">
                <div className="info-item">
                  <span>Login Name</span>
                  <span className="value">fitasa</span>
                </div>
                <div className="info-item">
                  <span>Approved</span>
                  <span className="value check">✓</span>
                </div>
                <div className="info-item">
                  <span>Approve</span>
                  <span className="value highlight">Approve</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Panel - Preview */}
          <div className="preview-panel">
            <div className="preview-header">
              <div className="rx-symbol">R/</div>
              <button 
                type="button" 
                className="look-like-btn"
                onClick={() => setShowPreview(!showPreview)}
              >
                LOOK LIKE
              </button>
            </div>
            {showPreview && (
              <div className="preview-content">
                <div className="preview-item">
                  <strong>CTM</strong>
                  <span>2mg</span>
                </div>
                <div className="preview-item">
                  <strong>Ephedrine</strong>
                  <span>5mg</span>
                </div>
                <div className="preview-item">
                  <strong>Aminophyllin</strong>
                  <span>150mg</span>
                </div>
                <div className="preview-item">
                  <strong>Lartas Calcium</strong>
                  <span>300mg</span>
                </div>
                <div className="preview-item">
                  <strong>Glyceril Guaicolate</strong>
                  <span>1 tab</span>
                </div>
                <div className="preview-item indent">
                  <strong>m.f pulv. dtd No. XC</strong>
                  <span>da in caps</span>
                </div>
                <div className="preview-item indent">
                  <strong>S. 3 dd caps I</strong>
                </div>
                <div className="preview-divider">R/</div>
                <div className="preview-item">
                  <strong>Salbutamol 2 mg tab No VL</strong>
                </div>
                <div className="preview-item indent">
                  <strong>S. 3 dd ½</strong>
                </div>
                <div className="preview-divider">R/</div>
                <div className="preview-item">
                  <strong>Interhistin tab No XXX</strong>
                </div>
                <div className="preview-item indent">
                  <strong>S. 2 dd 1</strong>
                </div>
                <div className="preview-divider">R/</div>
                <div className="preview-item">
                  <strong>OBH Syr fl. I</strong>
                </div>
                <div className="preview-item indent">
                  <strong>S. 3 dd C I</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .form-container {
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

        .page-header {
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

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 0;
          height: calc(100vh - 80px);
        }

        .form-panel {
          background: #f5f5f5;
          padding: 20px;
          overflow-y: auto;
        }

        .info-grid {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e5e7eb;
        }

        .info-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }

        .info-row:last-child {
          margin-bottom: 0;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        label {
          font-size: 13px;
          color: #333;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .editable-badge {
          background: #fef08a;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          margin-left: 8px;
        }

        input, select {
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          transition: all 0.3s;
        }

        input:focus, select:focus {
          outline: none;
          border-color: #7ed321;
        }

        .readonly-input {
          background: #f8f9fa;
          cursor: not-allowed;
        }

        select {
          cursor: pointer;
        }

        select:disabled {
          background: #f0f0f0;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .racikan-section {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .racikan-header {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }

        .racikan-selector, .racikan-number {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .racikan-selector {
          flex: 1;
        }

        .racikan-number {
          flex: 1;
        }

        .obat-select {
          flex: 1;
        }

        .signa-section {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .signa-symbol {
          font-size: 32px;
          font-weight: bold;
          color: #333;
        }

        .signa-select {
          flex: 1;
        }

        .obat-table {
          border: 1px solid #ddd;
          border-radius: 6px;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 50px;
          gap: 10px;
          padding: 12px;
          background: #f8f9fa;
          font-weight: 600;
          font-size: 13px;
          border-bottom: 1px solid #ddd;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 50px;
          gap: 10px;
          padding: 10px 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-row input {
          width: 100%;
          padding: 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 13px;
        }

        .col-action {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .delete-btn {
          background: #fee;
          border: none;
          padding: 6px;
          border-radius: 4px;
          cursor: pointer;
          color: #dc2626;
          transition: all 0.2s;
        }

        .delete-btn:hover {
          background: #fcc;
        }

        .add-row-btn {
          width: 100%;
          padding: 10px;
          background: #f8f9fa;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #666;
          font-size: 13px;
          transition: all 0.2s;
        }

        .add-row-btn:hover {
          background: #e9ecef;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s;
        }

        .action-btn.green {
          background: #7ed321;
          color: white;
        }

        .action-btn.green:hover {
          background: #6bb31a;
          transform: translateY(-2px);
        }

        .bottom-info {
          display: flex;
          gap: 20px;
          background: white;
          padding: 15px 20px;
          border-radius: 8px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }

        .info-item .value {
          font-weight: 600;
        }

        .info-item .check {
          color: #10b981;
          font-size: 18px;
        }

        .info-item .highlight {
          background: #fef08a;
          padding: 4px 12px;
          border-radius: 4px;
        }

        .preview-panel {
          background: white;
          border-left: 3px solid #e5e7eb;
          overflow-y: auto;
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 2px solid #e5e7eb;
        }

        .rx-symbol {
          font-size: 48px;
          font-weight: bold;
          color: #333;
        }

        .look-like-btn {
          background: #fef08a;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .look-like-btn:hover {
          background: #fde047;
          transform: translateY(-2px);
        }

        .preview-content {
          padding: 30px;
          font-family: 'Courier New', monospace;
        }

        .preview-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 15px;
          line-height: 1.6;
        }

        .preview-item.indent {
          padding-left: 60px;
        }

        .preview-item strong {
          flex: 1;
        }

        .preview-item span {
          text-align: right;
          min-width: 80px;
        }

        .preview-divider {
          font-size: 20px;
          font-weight: bold;
          margin: 20px 0 15px 0;
          color: #333;
        }

        @media (max-width: 1200px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }

          .preview-panel {
            border-left: none;
            border-top: 3px solid #e5e7eb;
            max-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .main-content.sidebar-open,
          .main-content.sidebar-closed {
            margin-left: 0;
          }

          .info-row {
            grid-template-columns: 1fr;
          }

          .action-buttons {
            flex-direction: column;
          }

          .action-btn {
            justify-content: center;
          }

          .page-header {
            padding: 15px 20px;
          }

          .header-text h1 {
            font-size: 16px;
          }

          .subtitle {
            font-size: 11px;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1.5fr 0.8fr 0.8fr 40px;
            font-size: 11px;
          }

          .table-row input {
            padding: 6px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default FormResep;