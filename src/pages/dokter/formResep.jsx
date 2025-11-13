import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import { Save, X, Plus } from 'lucide-react';

const FormResep = () => {
  const [formData, setFormData] = useState({
    nomorResep: '',
    tanggal: '',
    namaPasien: '',
    umur: '',
    jenisKelamin: '',
    alamat: '',
    noTelepon: '',
    diagnosis: '',
    keluhan: '',
  });

  const [obatList, setObatList] = useState([
    { id: 1, namaObat: '', dosis: '', frekuensi: '', durasi: '', keterangan: '' }
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
      { id: Date.now(), namaObat: '', dosis: '', frekuensi: '', durasi: '', keterangan: '' }
    ]);
  };

  const removeObat = (id) => {
    if (obatList.length > 1) {
      setObatList(obatList.filter(item => item.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Obat List:', obatList);
    alert('Resep berhasil dibuat!');
  };

  const handleReset = () => {
    setFormData({
      nomorResep: '',
      tanggal: '',
      namaPasien: '',
      umur: '',
      jenisKelamin: '',
      alamat: '',
      noTelepon: '',
      diagnosis: '',
      keluhan: '',
    });
    setObatList([{ id: 1, namaObat: '', dosis: '', frekuensi: '', durasi: '', keterangan: '' }]);
  };

  return (
    <div className="form-container">
      <Sidebar userType="dokter" />
      
      <div className="main-content">
        <div className="form-header">
          <h1>Form Resep Dokter</h1>
          <p>Buat resep baru untuk pasien Anda</p>
        </div>

        <form onSubmit={handleSubmit} className="form-card">
          <div className="section">
            <h2>Informasi Resep</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Nomor Resep *</label>
                <input
                  type="text"
                  name="nomorResep"
                  value={formData.nomorResep}
                  onChange={handleInputChange}
                  placeholder="RSP101"
                  required
                />
              </div>
              <div className="form-group">
                <label>Tanggal *</label>
                <input
                  type="date"
                  name="tanggal"
                  value={formData.tanggal}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Informasi Pasien</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Nama Pasien *</label>
                <input
                  type="text"
                  name="namaPasien"
                  value={formData.namaPasien}
                  onChange={handleInputChange}
                  placeholder="Nama lengkap pasien"
                  required
                />
              </div>
              <div className="form-group">
                <label>Umur *</label>
                <input
                  type="number"
                  name="umur"
                  value={formData.umur}
                  onChange={handleInputChange}
                  placeholder="25"
                  min="0"
                  required
                />
              </div>
              <div className="form-group">
                <label>Jenis Kelamin *</label>
                <select
                  name="jenisKelamin"
                  value={formData.jenisKelamin}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div className="form-group">
                <label>No. Telepon *</label>
                <input
                  type="tel"
                  name="noTelepon"
                  value={formData.noTelepon}
                  onChange={handleInputChange}
                  placeholder="08123456789"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Alamat *</label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                placeholder="Alamat lengkap pasien"
                rows="2"
                required
              />
            </div>
          </div>

          <div className="section">
            <h2>Diagnosis & Keluhan</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Diagnosis *</label>
                <input
                  type="text"
                  name="diagnosis"
                  value={formData.diagnosis}
                  onChange={handleInputChange}
                  placeholder="Contoh: Hipertensi, Diabetes"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Keluhan Pasien *</label>
              <textarea
                name="keluhan"
                value={formData.keluhan}
                onChange={handleInputChange}
                placeholder="Deskripsikan keluhan pasien"
                rows="3"
                required
              />
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <h2>Resep Obat</h2>
              <button type="button" onClick={addObat} className="add-btn">
                <Plus size={18} />
                Tambah Obat
              </button>
            </div>

            {obatList.map((obat, index) => (
              <div key={obat.id} className="obat-row">
                <span className="obat-number">{index + 1}</span>
                <div className="obat-grid">
                  <div className="form-group">
                    <label>Nama Obat</label>
                    <input
                      type="text"
                      value={obat.namaObat}
                      onChange={(e) => handleObatChange(obat.id, 'namaObat', e.target.value)}
                      placeholder="Nama obat"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Dosis</label>
                    <input
                      type="text"
                      value={obat.dosis}
                      onChange={(e) => handleObatChange(obat.id, 'dosis', e.target.value)}
                      placeholder="500mg"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Frekuensi</label>
                    <input
                      type="text"
                      value={obat.frekuensi}
                      onChange={(e) => handleObatChange(obat.id, 'frekuensi', e.target.value)}
                      placeholder="3x sehari"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Durasi</label>
                    <input
                      type="text"
                      value={obat.durasi}
                      onChange={(e) => handleObatChange(obat.id, 'durasi', e.target.value)}
                      placeholder="7 hari"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Keterangan</label>
                    <input
                      type="text"
                      value={obat.keterangan}
                      onChange={(e) => handleObatChange(obat.id, 'keterangan', e.target.value)}
                      placeholder="Diminum setelah makan"
                    />
                  </div>
                </div>
                {obatList.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeObat(obat.id)}
                    className="remove-btn"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleReset} className="reset-btn">
              Reset Form
            </button>
            <button type="submit" className="submit-btn">
              <Save size={18} />
              Buat Resep
            </button>
          </div>
        </form>
      </div>

      <style jsx="true">{`
        .form-container {
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

        .form-header {
          margin-bottom: 30px;
        }

        .form-header h1 {
          font-size: 32px;
          color: #1e293b;
          margin-bottom: 5px;
        }

        .form-header p {
          color: #64748b;
          font-size: 16px;
        }

        .form-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .section {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #e2e8f0;
        }

        .section:last-of-type {
          border-bottom: none;
        }

        .section h2 {
          font-size: 20px;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        label {
          color: #475569;
          font-weight: 500;
          margin-bottom: 8px;
          font-size: 14px;
        }

        input, textarea, select {
          padding: 12px 15px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.3s;
          font-family: inherit;
        }

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #f093fb;
        }

        textarea {
          resize: vertical;
        }

        select {
          cursor: pointer;
        }

        .obat-row {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          margin-bottom: 20px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 10px;
        }

        .obat-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border-radius: 50%;
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 30px;
        }

        .obat-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .add-btn, .remove-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 500;
        }

        .add-btn {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(240, 147, 251, 0.4);
        }

        .remove-btn {
          background: #fee;
          color: #dc2626;
          padding: 8px;
          margin-top: 30px;
        }

        .remove-btn:hover {
          background: #fcc;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 15px;
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }

        .reset-btn, .submit-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .reset-btn {
          background: #f1f5f9;
          color: #475569;
        }

        .reset-btn:hover {
          background: #e2e8f0;
        }

        .submit-btn {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(240, 147, 251, 0.4);
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 70px;
            padding: 20px;
          }

          .form-card {
            padding: 20px;
          }

          .obat-grid {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column;
          }

          .reset-btn, .submit-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FormResep;