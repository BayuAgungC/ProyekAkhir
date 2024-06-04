import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClientForm from "./ClientForm"; // Import ClientForm component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

const Page1 = () => {
  const [clients, setClients] = useState([
    {
      nama: "Jianto",
      kategori: "Pribadi",
      contact: "083467398790",
      layanan: "Akta",
      status: "Selesai",
      tglMasuk: "17-mei-2024",
    },
    {
      nama: "Yanto",
      kategori: "Pribadi",
      contact: "083456398790",
      layanan: "Surat Kuasa",
      status: "Progres",
      tglMasuk: "01-mei-2024",
    },
  ]);

  const [showForm, setShowForm] = useState(false); // State to control whether the client form is shown
  const [editClient, setEditClient] = useState(null); // State to hold the client being edited
  const [currentPage, setCurrentPage] = useState(1); // State to track current page

  const clientsPerPage = 6; // Number of clients per page
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

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
  
      <h1 className="text-2xl font-bold mb-4">Client</h1>
  
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
            + New Client
          </button>
        </div>
        <div className="flex flex-wrap items-center mb-4 w-full">
          <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
            <option value="">Filter by Kategori</option>
            <option value="Pribadi">Pribadi</option>
            <option value="Perusahaan">Perusahaan</option>
          </select>
          <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
            <option value="">Filter by Layanan</option>
            <option value="Akta">Akta</option>
            <option value="Surat Kuasa">Surat Kuasa</option>
          </select>
          <select className="mr-2 md:mr-4 px-3 py-2 bg-white hover:bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black">
            <option value="">Filter by Status</option>
            <option value="Selesai">Selesai</option>
            <option value="Progres">Progres</option>
          </select>
        </div>
      </div>
  
      <div className="bg-white rounded-lg shadow-lg p-4">
        <table className="min-w-full bg-white table">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Nama</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Kategori</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Contact</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Layanan</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Tgl Masuk</th>
              <th className="py-2 px-4 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {currentClients.map((client, index) => (
              <tr key={index} className="text-black">
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.nama}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.kategori}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.contact}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.layanan}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.status}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{client.tglMasuk}</td>
                <td className="border-t-2 border-gray-200 py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleEditClient(client)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
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
          disabled={currentClients.length < clientsPerPage}
        >
          Next
        </button>
      </div>
  
      {/* Floating client form */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md p-8">
            <ClientForm onCancel={toggleForm} onSave={handleSaveClient} client={editClient} />
          </div>
        </div>
      )}
  
      <footer className="mt-auto">
        <p className="text-center text-sm text-gray-600 mt-8">&copy; 2024 Sistem Informasi Manajemen Kantor Notaris. All rights reserved.</p>
      </footer>
    </div>
  );
  };
  
export default Page1;
