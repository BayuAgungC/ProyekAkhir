// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const data = [
    { name: 'Jianto', kategori: 'Pribadi', layanan: 'Akta', status: 'Selesai', tglMasuk: '17-mei-2024' },
    { name: 'Yanto', kategori: 'Pribadi', layanan: 'Surat Kuasa', status: 'Progres', tglMasuk: '01-mei-2024' },
  ];

  const totalClients = data.length;
  const completed = data.filter(item => item.status === 'Selesai').length;
  const inProgress = data.filter(item => item.status === 'Progres').length;
  const canceled = 0; // Initialize to 0, as there are no canceled items in the data

  return (
    <div className="container mx-auto px-4 py-8 text-black h-full flex flex-col justify-between">
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

      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="bg-white rounded-md p-4 shadow-md mb-8">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-200 rounded-md p-4 shadow-md">
              <h3 className="text-sm font-bold mb-2">Total Client</h3>
              <p className="text-xl font-bold">{totalClients}</p>
            </div>
            <div className="bg-green-200 rounded-md p-4 shadow-md">
              <h3 className="text-sm font-bold mb-2">Selesai</h3>
              <p className="text-xl font-bold">{completed}</p>
            </div>
            <div className="bg-yellow-200 rounded-md p-4 shadow-md">
              <h3 className="text-sm font-bold mb-2">Progres</h3>
              <p className="text-xl font-bold">{inProgress}</p>
            </div>
            <div className="bg-red-200 rounded-md p-4 shadow-md">
              <h3 className="text-sm font-bold mb-2">Cancel</h3>
              <p className="text-xl font-bold">{canceled}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md p-4 shadow-md">

          <div className="bg-white rounded-lg shadow-lg p-4">
            <table className="min-w-full bg-white table">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 table-cell">Nama</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 table-cell">Kategori</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 table-cell">Layanan</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 table-cell">Status</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 table-cell">Tgl Masuk</th>
                  <th className="py-2 px-4 bg-gray-200"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="text-black">
                    <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{item.name}</td>
                    <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{item.kategori}</td>
                    <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{item.layanan}</td>
                    <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{item.status}</td>
                    <td className="border-t-2 border-gray-200 py-2 px-4 table-cell">{item.tglMasuk}</td>
                    <td className="border-t-2 border-gray-200 py-2 px-4">
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <footer className="mt-auto">
        <p className="text-center text-sm text-gray-600 mt-8">&copy; 2024 Sistem Informasi Manajemen Kantor Notaris. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
