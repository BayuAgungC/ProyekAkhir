import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import LaporanForm from "./LaporanForm"; // Import LaporanForm component

const Page4 = () => {
  const [laporans, setLaporans] = useState([
    {
      nama: "Laporan Keuangan",
      bulan: "Mei",
      tahun: "2024",
      jenis: "Keuangan",
    },
    {
      nama: "Laporan Proyek",
      bulan: "April",
      tahun: "2024",
      jenis: "Proyek",
    },
  ]);

  const [showForm, setShowForm] = useState(false); // State to control whether the laporan form is shown
  const [editLaporan, setEditLaporan] = useState(null); // State to hold the laporan being edited
  const [currentPage, setCurrentPage] = useState(1); // State to track current page

  const laporansPerPage = 5; // Number of laporans per page
  const indexOfLastLaporan = currentPage * laporansPerPage;
  const indexOfFirstLaporan = indexOfLastLaporan - laporansPerPage;
  const currentLaporans = laporans.slice(indexOfFirstLaporan, indexOfLastLaporan);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSaveLaporan = (newLaporanData) => {
    if (editLaporan) {
      const updatedLaporans = laporans.map((laporan) =>
        laporan === editLaporan ? newLaporanData : laporan
      );
      setLaporans(updatedLaporans);
      setEditLaporan(null);
    } else {
      setLaporans([...laporans, newLaporanData]);
    }
    toggleForm(); // Hide the form after saving the laporan
  };

  const handleEditLaporan = (laporan) => {
    setEditLaporan(laporan);
    toggleForm();
  };

  const handleDeleteLaporan = (laporanToDelete) => {
    const updatedLaporans = laporans.filter((laporan) => laporan !== laporanToDelete);
    setLaporans(updatedLaporans);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <style>{`
        /* CSS untuk tabel */
        .table {
          width: 100%;
          table-layout: fixed;
        }

        /* CSS untuk sel dalam tabel */
        .table-cell {
          max-width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      `}</style>

      <h1 className="text-2xl font-bold mb-4">Laporan</h1>

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
            + Add New Laporan
          </button>
        </div>
        <div className="flex flex-wrap items-center mb-4 w-full">
          <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
            <option value="">Filter by Bulan</option>
            {/* Options for Bulan filter */}
          </select>
          <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
            <option value="">Filter by Tahun</option>
            {/* Options for Tahun filter */}
          </select>
          <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
            <option value="">Filter by Jenis</option>
            {/* Options for Jenis filter */}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <table className="min-w-full bg-white table">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Nama Laporan</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Bulan</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Tahun</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Jenis</th>
              <th className="py-2 px-4 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {currentLaporans.map((laporan, index) => (
              <tr key={index} className="text-black">
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{laporan.nama}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{laporan.bulan}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{laporan.tahun}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{laporan.jenis}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleEditLaporan(laporan)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                 
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() => handleDeleteLaporan(laporan)}
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
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
          disabled={currentLaporans.length < laporansPerPage}
        >
          Next
        </button>
      </div>

      {/* Floating laporan form */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md p-8">
            <LaporanForm onCancel={toggleForm} onSave={handleSaveLaporan} laporan={editLaporan} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page4;
