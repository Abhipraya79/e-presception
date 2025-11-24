import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import { useSidebar } from '../../components/SidebarContext';
import { Bell, Printer, Volume2, FileText } from 'lucide-react';
import logoImage from '../../assets/OIP2.jpg';

const FormPlanPenjualan = () => {
  const { isOpen } = useSidebar();
  
  const [formData, setFormData] = useState({
    invoiceId: '0476',
    namaPx: 'Tanti Puspa',
    tanggal: '01/01/2024',
    customer: 'BPJS',
    pxId: 'BEKALA',
    pxKelas: 'Umum',
    jTempo: '3-Tempo',
    jTempo2: '01/01/2024',
    jam: '18:24',
    alamatPx: 'Jl. KH Ahmad Dahlan XXXA',
    dokter: 'Fahria Faisal, dr',
    resepRuang: 'Umum-Jalan',
    noRm: '123334',
    tunai: '',
    ruangan: 'Rawat Jalan',
    daftarUlb: ''
  });

  const [obatList, setObatList] = useState([
    { id: 1, kode: '6NA02', namaObat: 'NATRIUM DIKLOFENAC TAB/50/100', qty: '10', harga: '290', disc: '0.00%', r: '1', payer: '-', jumlah: '2.900', signa: '' },
    { id: 2, kode: '6NA02', namaObat: 'METRONIDAZ OLE 500MC/1100', qty: '10', harga: '300', disc: '0.00%', r: '1', payer: '-', jumlah: '3.000', signa: '' },
    { id: 3, kode: '6NA02', namaObat: 'CEFIXIME 100MG TAB/50/100', qty: '10', harga: '900', disc: '0.00%', r: '1', payer: '-', jumlah: '9.000', signa: '' }
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateGrandTotal = () => {
    return obatList.reduce((sum, item) => sum + parseFloat(item.jumlah.replace('.', '')), 0);
  };

  return (
    <div className="form-container">
      <Sidebar userType="apoteker" />
      
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

        <div className="form-content">
          {/* Top Form Grid */}
          <div className="top-grid">
            <div className="grid-section">
              <div className="form-row">
                <label>Invoice ID</label>
                <input type="text" name="invoiceId" value={formData.invoiceId} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>Px ID</label>
                <select name="pxId" value={formData.pxId} onChange={handleInputChange}>
                  <option value="BEKALA">BEKALA</option>
                </select>
              </div>
              <div className="form-row">
                <label>Jam</label>
                <input type="text" name="jam" value={formData.jam} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>NO RM</label>
                <input type="text" name="noRm" value={formData.noRm} onChange={handleInputChange} />
              </div>
            </div>

            <div className="grid-section">
              <div className="form-row">
                <label>Nama Px</label>
                <input type="text" name="namaPx" value={formData.namaPx} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>Px Kelas</label>
                <input type="text" name="pxKelas" value={formData.pxKelas} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>Alamat Px</label>
                <input type="text" name="alamatPx" value={formData.alamatPx} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>Tunai</label>
                <input type="text" name="tunai" value={formData.tunai} onChange={handleInputChange} />
              </div>
            </div>

            <div className="grid-section">
              <div className="form-row">
                <label>Tanggal</label>
                <input type="text" name="tanggal" value={formData.tanggal} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>J-Tempo</label>
                <input type="text" name="jTempo" value={formData.jTempo} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>Dokter</label>
                <select name="dokter" value={formData.dokter} onChange={handleInputChange}>
                  <option value="Fahria Faisal, dr">Fahria Faisal, dr</option>
                </select>
              </div>
              <div className="form-row">
                <label>Ruangan</label>
                <select name="ruangan" value={formData.ruangan} onChange={handleInputChange} className="yellow-select">
                  <option value="Rawat Jalan">Rawat Jalan</option>
                </select>
              </div>
            </div>

            <div className="grid-section">
              <div className="form-row">
                <label>Customer</label>
                <select name="customer" value={formData.customer} onChange={handleInputChange} className="orange-select">
                  <option value="BPJS">BPJS</option>
                </select>
              </div>
              <div className="form-row">
                <label></label>
                <input type="text" name="jTempo2" value={formData.jTempo2} onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <label>Resep Ruang</label>
                <select name="resepRuang" value={formData.resepRuang} onChange={handleInputChange} className="green-select">
                  <option value="Umum-Jalan">Umum-Jalan</option>
                </select>
              </div>
              <div className="form-row">
                <label>DAFTAR ULB</label>
                <input type="text" name="daftarUlb" value={formData.daftarUlb} onChange={handleInputChange} />
              </div>
            </div>

            <div className="resep-id-section">
              <div className="resep-id-label">RESEP ID</div>
              <div className="resep-id-value">0</div>
            </div>
          </div>

          {/* Obat Table */}
          <div className="table-section">
            <table className="obat-table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Obat</th>
                  <th>Kwt(Qty)</th>
                  <th>Harga</th>
                  <th>DISC</th>
                  <th>R</th>
                  <th>Payer</th>
                  <th>Jumlah</th>
                  <th>Signa</th>
                </tr>
              </thead>
              <tbody>
                {obatList.map((obat) => (
                  <tr key={obat.id}>
                    <td>{obat.kode}</td>
                    <td>{obat.namaObat}</td>
                    <td>{obat.qty}</td>
                    <td>{obat.harga}</td>
                    <td>{obat.disc}</td>
                    <td>{obat.r}</td>
                    <td>{obat.payer}</td>
                    <td>{obat.jumlah}</td>
                    <td>{obat.signa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="left-actions">
              <div className="action-item yellow">
                <Bell size={30} />
                <div className="action-text">
                  <strong>€-Resep Notif</strong>
                </div>
              </div>
              <div className="action-item gray">
                <Printer size={30} />
                <div className="action-text">
                  <strong>Print-Out</strong>
                </div>
              </div>
              <div className="stock-info">
                <div><strong>Stock#</strong></div>
                <div className="stock-value">666,00</div>
              </div>
              <div className="stock-info">
                <div><strong>Hutang Px</strong></div>
                <div className="stock-value red">Isda / S</div>
              </div>
            </div>

            <div className="totals-section">
              <div className="total-row">
                <span>Grand Total</span>
                <span className="total-value">{calculateGrandTotal().toLocaleString('id-ID')}</span>
              </div>
              <div className="total-row">
                <span>DISC Total</span>
                <span className="total-value">0</span>
              </div>
              <div className="total-row">
                <span>NETTO</span>
                <span className="total-value">{calculateGrandTotal().toLocaleString('id-ID')}</span>
              </div>
            </div>

            <div className="right-actions">
              <button className="action-btn blue">
                <Volume2 size={30} />
                <span>Penal Panggil</span>
              </button>
              <button className="action-btn green">
                <FileText size={30} />
                <span>Cetak Struk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
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

        .form-content {
          padding: 20px;
        }

        .top-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr) auto;
          gap: 15px;
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .grid-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        label {
          font-size: 11px;
          color: #666;
          font-weight: 500;
        }

        input, select {
          padding: 8px 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 13px;
        }

        input:focus, select:focus {
          outline: none;
          border-color: #7ed321;
        }

        .orange-select {
          background: #ffa500;
          color: white;
          font-weight: 600;
          border: none;
        }

        .green-select {
          background: #10b981;
          color: white;
          font-weight: 600;
          border: none;
        }

        .yellow-select {
          background: #fbbf24;
          color: white;
          font-weight: 600;
          border: none;
        }

        .resep-id-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #4318FF;
          color: white;
          padding: 15px;
          border-radius: 8px;
        }

        .resep-id-label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .resep-id-value {
          font-size: 48px;
          font-weight: 700;
        }

        .table-section {
          background: white;
          border-radius: 8px;
          overflow-x: auto;
          margin-bottom: 20px;
        }

        .obat-table {
          width: 100%;
          border-collapse: collapse;
        }

        .obat-table thead {
          background: #f8f9fa;
        }

        .obat-table th {
          padding: 12px;
          text-align: left;
          font-size: 12px;
          font-weight: 600;
          border-bottom: 2px solid #e5e7eb;
        }

        .obat-table td {
          padding: 12px;
          font-size: 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .obat-table tbody tr:hover {
          background: #f8f9fa;
        }

        .bottom-section {
          display: flex;
          gap: 20px;
          background: white;
          padding: 20px;
          border-radius: 8px;
        }

        .left-actions {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
        }

        .action-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          border-radius: 8px;
          gap: 8px;
        }

        .action-item.yellow {
          background: #fef08a;
        }

        .action-item.gray {
          background: #e5e7eb;
        }

        .action-text {
          font-size: 11px;
          text-align: center;
        }

        .stock-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 12px;
        }

        .stock-value {
          font-size: 14px;
          font-weight: 600;
        }

        .stock-value.red {
          color: #dc2626;
        }

        .totals-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
        }

        .total-value {
          color: #4318FF;
        }

        .right-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 30px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          gap: 10px;
          color: white;
          font-weight: 600;
          transition: all 0.3s;
        }

        .action-btn.blue {
          background: #4318FF;
        }

        .action-btn.blue:hover {
          background: #3614cc;
          transform: translateY(-2px);
        }

        .action-btn.green {
          background: #10b981;
        }

        .action-btn.green:hover {
          background: #059669;
          transform: translateY(-2px);
        }

        @media (max-width: 1400px) {
          .top-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .resep-id-section {
            grid-column: 1 / -1;
          }

          .bottom-section {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .main-content.sidebar-open,
          .main-content.sidebar-closed {
            margin-left: 0;
          }

          .top-grid {
            grid-template-columns: 1fr;
          }

          .bottom-section {
            flex-direction: column;
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

          .form-content {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default FormPlanPenjualan;