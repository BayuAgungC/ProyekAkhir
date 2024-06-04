import React, { useState, useEffect } from 'react';

const DataClientForm = ({ onCancel, onSave, client }) => {
  const [newClient, setNewClient] = useState({
    nama: '',
    kepemilikan: '',
    file: '',
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

  const handleFileChange = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      setNewClient({ ...newClient, file: files[0].name });
    }
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
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Data Client Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Dokumen</label>
            <input
              type="text"
              name="nama"
              value={newClient.nama}
              onChange={handleInputChange}
              style={inputStyles}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Kepemilikan</label>
            <select
              name="kepemilikan"
              value={newClient.kepemilikan}
              onChange={handleInputChange}
              style={inputStyles}
              required
            >
              <option value="">Pilih Kepemilikan</option>
              <option value="Pribadi">Pribadi</option>
              <option value="Perusahaan">Perusahaan</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Upload File</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              style={inputStyles}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataClientForm;
