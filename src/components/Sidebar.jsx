import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-gray-800 shadow-md">
      <div className="p-4">
        <h1 className="text-lg font-bold mb-4">Sistem Informasi Manajemen Kantor Notaris</h1>
        <ul>
          <li className="mb-4">
            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-200 text-gray-800">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/page1" className="block py-2 px-4 rounded hover:bg-gray-200 text-gray-800">Client</Link>
          </li>
          <li className="mb-4">
            <Link to="/page2" className="block py-2 px-4 rounded hover:bg-gray-200 text-gray-800">Data Client</Link>
          </li>
          <li className="mb-4">
            <Link to="/page3" className="block py-2 px-4 rounded hover:bg-gray-200 text-gray-800">Lembar Kerja</Link>
          </li>
          <li className="mb-4">
            <Link to="/page4" className="block py-2 px-4 rounded hover:bg-gray-200 text-gray-800">Laporan</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
