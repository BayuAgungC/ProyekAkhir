import React, { useState } from "react";

const LaporanForm = ({ onCancel, onSave, laporan }) => {
  const [formData, setFormData] = useState(
    laporan || {
      nama: "",
      bulan: "",
      tahun: "",
      jenis: "",
      file: null, // Menambahkan field untuk file
    }
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Laporan</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Bulan</label>
        <input
          type="text"
          name="bulan"
          value={formData.bulan}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tahun</label>
        <input
          type="text"
          name="tahun"
          value={formData.tahun}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Jenis</label>
        <input
          type="text"
          name="jenis"
          value={formData.jenis}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Unggah File</label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default LaporanForm;
