import React, { useState } from 'react';
import LembarKerjaForm from './LembarKerjaFrom'; // Import LembarKerjaForm component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

const Page3 = () => {
  const [lembarKerja, setLembarKerja] = useState([
    { nama: 'Lembar Kerja 1', kepemilikan: 'Pribadi', status: 'Belum Selesai', kategori: 'Kategori 1', targetSelesai: '2024-12-01' },
    { nama: 'Lembar Kerja 2', kepemilikan: 'Perusahaan', status: 'Selesai', kategori: 'Kategori 2', targetSelesai: '2024-12-15' },
    // Add more sample data if needed
  ]);

  // Pagination
  const [page, setPage] = useState(1);
  const lembarKerjaPerPage = 6;
  const totalPages = Math.ceil(lembarKerja.length / lembarKerjaPerPage);
  const indexOfLastLembarKerja = page * lembarKerjaPerPage;
  const indexOfFirstLembarKerja = indexOfLastLembarKerja - lembarKerjaPerPage;
  const currentLembarKerja = lembarKerja.slice(indexOfFirstLembarKerja, indexOfLastLembarKerja);

  const [showForm, setShowForm] = useState(false); // State to control whether the form is shown
  const [editLembarKerja, setEditLembarKerja] = useState(null); // State to hold the lembar kerja being edited

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSaveLembarKerja = (newLembarKerjaData) => {
    if (editLembarKerja) {
      const updatedLembarKerja = lembarKerja.map((lembar) =>
        lembar === editLembarKerja ? newLembarKerjaData : lembar
      );
      setLembarKerja(updatedLembarKerja);
      setEditLembarKerja(null);
    } else {
      setLembarKerja([...lembarKerja, newLembarKerjaData]);
    }
    toggleForm(); // Hide the form after saving
  };

  const handleEditLembarKerja = (lembar) => {
    setEditLembarKerja(lembar);
    toggleForm();
  };

  const handleDeleteLembarKerja = (lembarToDelete) => {
    const updatedLembarKerja = lembarKerja.filter((lembar) => lembar !== lembarToDelete);
    setLembarKerja(updatedLembarKerja);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto p-4 text-black h-full flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-4">Data Lembar Kerja</h1>

        <div className="mb-4 flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center mb-4">
            <input
              type="text"
              className="w-full md:w-64 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black"
              placeholder="Search..."
            />
            <button
              className="ml-2 md:ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleForm} // Toggle the form visibility
            >
              + Add Lembar Kerja
            </button>
          </div>
          <div className="flex flex-wrap items-center mb-4 w-full">
            <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
              <option value="">Filter by Kepemilikan</option>
              <option value="Pribadi">Pribadi</option>
              <option value="Perusahaan">Perusahaan</option>
            </select>
            <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
              <option value="">Filter by Status</option>
              <option value="Belum Selesai">Belum Selesai</option>
              <option value="Selesai">Selesai</option>
            </select>
            <select className="px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
              <option value="">Filter by Kategori</option>
              <option value="Kategori 1">Kategori 1</option>
              <option value="Kategori 2">Kategori 2</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <table className="min-w-full bg-white table">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Nama Lembar Kerja</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Kepemilikan</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Kategori</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Target Selesai</th>
                <th className="py-2 px-4 bg-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              {currentLembarKerja.map((lembar, index) => (
                <tr key={index} className="text-black">
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{lembar.nama}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{lembar.kepemilikan}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{lembar.status}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{lembar.kategori}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{lembar.targetSelesai}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4 flex justify-start space-x-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
                      onClick={() => handleEditLembarKerja(lembar)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
                      onClick={() => handleDownloadClient(lembar)}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
                      onClick={() => handleDeleteLembarKerja(lembar)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between">
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${page === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700"}`}
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${page === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700"}`}
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Lembar Kerja Form */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md p-8">
            <LembarKerjaForm
              onCancel={toggleForm}
              onSave={handleSaveLembarKerja}
              lembarKerja={editLembarKerja}
            />
          </div>
        </div>
      )}

      {/* CSS for consistent table styling */}
      <style>{`
        .table {
          width: 100%;
          table-layout: fixed;
        }

        .table-cell {
          max-width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      `}</style>
      <footer className="mt-auto">
        <p className="text-center text-sm text-gray-600 mt-8">&copy; 2024 Sistem Informasi Manajemen Kantor Notaris. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default Page3;
