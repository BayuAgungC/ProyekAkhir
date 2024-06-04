import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DataClientForm from './DataClientForm'; // Import DataClientForm component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

const Page2 = () => {
  const [clients, setClients] = useState([
    { nama: 'Document 1', kepemilikan: 'Pribadi', file: 'file1.pdf' },
    { nama: 'Document 2', kepemilikan: 'Perusahaan', file: 'file2.pdf' },
    // Add more sample data if needed
  ]);

  // Pagination
  const [page, setPage] = useState(1);
  const clientsPerPage = 6;
  const totalPages = Math.ceil(clients.length / clientsPerPage);
  const indexOfLastClient = page * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  const [showForm, setShowForm] = useState(false); // State to control whether the data client form is shown
  const [editClient, setEditClient] = useState(null); // State to hold the client being edited

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSaveClient = (newClientData) => {
    if (editClient) {
      const updatedClients = clients.map((client) =>
        client === editClient ? newClientData : client
      );
      setClients(updatedClients);
      setEditClient(null);
    } else {
      setClients([...clients, newClientData]);
    }
    toggleForm(); // Hide the form after saving the client
  };

  const handleEditClient = (client) => {
    setEditClient(client);
    toggleForm();
  };

  const handleDeleteClient = (clientToDelete) => {
    const updatedClients = clients.filter((client) => client !== clientToDelete);
    setClients(updatedClients);
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
        <h1 className="text-2xl font-bold mb-4">Data Client</h1>

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
              + Add Data Client
            </button>
          </div>
          <div className="flex flex-wrap items-center mb-4 w-full">
            <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
              <option value="">Filter by Kepemilikan</option>
              <option value="Pribadi">Pribadi</option>
              <option value="Perusahaan">Perusahaan</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <table className="min-w-full bg-white table">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Nama Dokumen</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Kepemilikan</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">File</th>
                <th className="py-2 px-4 bg-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              {currentClients.map((client, index) => (
                <tr key={index} className="text-black">
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.nama}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.kepemilikan}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.file}</td>
                  <td className="border-t-2 border-gray-200 py-2 px-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleEditClient(client)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                      onClick={() => handleDownloadClient(client)}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                      onClick={() => handleDeleteClient(client)}
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

      <footer className="mt-auto">
        <p className="text-center text-sm text-gray-600 mt-8">&copy; 2024 Sistem Informasi Manajemen Kantor Notaris. All rights reserved.</p>
      </footer>

      {/* Data Client Form */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md p-8">
            <DataClientForm
              onCancel={toggleForm}
              onSave={handleSaveClient}
              client={editClient}
            />
          </div>
        </div>
      )}

      {/* CSS for consistent table styling */}
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
    </div>
  );
};

export default Page2;
