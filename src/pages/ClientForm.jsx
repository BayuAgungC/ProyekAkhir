import React, { useState, useEffect } from 'react';

const ClientForm = ({ onCancel, onSave, client }) => {
  const [newClient, setNewClient] = useState({
    nama: '',
    tglMasuk: '',
    alamat: '',
    targetSelesai: '',
    contact: '',
    kategori: '',
    layanan: '',
    status: '',
    deskripsi: '',
  });

  useEffect(() => {
    if (client) {
      setNewClient(client);
    }
  }, [client]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleSave = () => {
    onSave(newClient);
  };

  const inputStyles = {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '8px',
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-black">New Client Form</h1>
        <div className="grid grid-cols-2 gap-4 text-black">
          <div>
            <label className="block mb-1">Nama:</label>
            <input type="text" name="nama" value={newClient.nama} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div>
            <label className="block mb-1">Tanggal Masuk:</label>
            <input type="text" name="tglMasuk" value={newClient.tglMasuk} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div>
            <label className="block mb-1">Alamat:</label>
            <input type="text" name="alamat" value={newClient.alamat} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div>
            <label className="block mb-1">Target Selesai:</label>
            <input type="text" name="targetSelesai" value={newClient.targetSelesai} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div>
            <label className="block mb-1">Contact:</label>
            <input type="text" name="contact" value={newClient.contact} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div>
            <label className="block mb-1">Kategori:</label>
            <input type="text" name="kategori" value={newClient.kategori} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div>
            <label className="block mb-1">Layanan:</label>
            <input type="text" name="layanan" value={newClient.layanan} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div>
            <label className="block mb-1">Status:</label>
            <input type="text" name="status" value={newClient.status} onChange={handleInputChange} style={inputStyles} />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Deskripsi:</label>
            <textarea name="deskripsi" value={newClient.deskripsi} onChange={handleInputChange} style={{ ...inputStyles, height: '100px' }} />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={onCancel}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
