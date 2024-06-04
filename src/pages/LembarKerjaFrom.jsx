import React, { useState } from 'react';

const LembarKerjaForm = ({ onCancel, onSave, lembarKerja }) => {
  const [formData, setFormData] = useState(
    lembarKerja || {
      nama: '',
      kepemilikan: '',
      status: '',
      kategori: '',
      targetSelesai: '',
      file: null,
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
        <label className="block text-sm font-medium text-gray-700">Nama Lembar Kerja</label>
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
        <label className="block text-sm font-medium text-gray-700">Kepemilikan</label>
        <select
          name="kepemilikan"
          value={formData.kepemilikan}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        >
          <option value="">Pilih Kepemilikan</option>
          <option value="Pribadi">Pribadi</option>
          <option value="Perusahaan">Perusahaan</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        >
          <option value="">Pilih Status</option>
          <option value="Belum Selesai">Belum Selesai</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Kategori</label>
        <input
          type="text"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Target Selesai</label>
        <input
          type="date"
          name="targetSelesai"
          value={formData.targetSelesai}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload File</label>
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

export default LembarKerjaForm;
