import React, { useState, useEffect } from 'react';
import { User, Search, Download, Shield, CheckCircle, XCircle } from 'lucide-react';

const UserStatusPage = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    username: ''
  });

  const [showResults, setShowResults] = useState(false);

  // Add custom styles for scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .custom-table-scroll::-webkit-scrollbar {
        height: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSearchChange = (value) => {
    setSearchCriteria({ username: value });
  };

  const handleSearch = () => {
    setShowResults(true);
    console.log('Searching for username:', searchCriteria.username);
  };

  const handleExportToExcel = () => {
    console.log('Exporting to Excel...');
    alert('Exporting data to Excel...');
  };

  // Sample user data based on the screenshot
  const userData = [
    {
      status: 'Active',
      tpn: 'Jawad Ali Mir',
      username: 'SDSKTRS1.MIR16',
      cnic: '71104-8679637-5',
      cellNumber: '0396-9999999',
      region: '',
      exchangeId: '',
      tpnCode: '12171217',
      date: '1/31/2025 12:24:02 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Sultan Mouzam',
      username: 'FSAGTR.SL1NMOZM',
      cnic: '34601-4397116-5',
      cellNumber: '0334-7596747',
      region: '',
      exchangeId: '',
      tpnCode: '12171217',
      date: '9/8/2020 2:49:31 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Asad Naseem',
      username: 'ASADNSEEM1.FS',
      cnic: '17301-5946290-9',
      cellNumber: '0300-5922705',
      region: '',
      exchangeId: '',
      tpnCode: '12181218',
      date: '7/29/2022 6:03:48 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'ISMAIL',
      username: 'ISMAIL.F$48',
      cnic: '17301-1434438-5',
      cellNumber: '0313-5911617',
      region: '',
      exchangeId: '',
      tpnCode: '12181218',
      date: '3/19/2020 2:20:40 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Muhammad Sabir Shabbeer',
      username: 'MSABIR01.FS',
      cnic: '34603-1642122-7',
      cellNumber: '0320-6271416',
      region: '',
      exchangeId: '',
      tpnCode: '12181218',
      date: '1/6/2023 3:52:06 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'MUHAMMAD ILYAS',
      username: 'MUHAMMAD.ILYAS.F$2',
      cnic: '33100-9464574-3',
      cellNumber: '923457644665',
      region: '',
      exchangeId: '',
      tpnCode: '12181218',
      date: '8/8/2018 3:13:00 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Abdul Hanan',
      username: 'ABDULHANAN1.FS',
      cnic: '35201-8635340-3',
      cellNumber: '0324-4567145',
      region: '',
      exchangeId: '',
      tpnCode: '12181218',
      date: '3/15/2022 5:37:01 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Muhammad Umair Javed',
      username: 'RDDLS.JMAIR',
      cnic: '35200-7879114-5',
      cellNumber: '03215132852',
      region: '',
      exchangeId: '',
      tpnCode: '12171217',
      date: '2/28/2020 1:24:15 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'M. Usman Mazhar',
      username: 'RDTRETISALATRY1.Jinan',
      cnic: '37405-0119386-7',
      cellNumber: '0300-4537140',
      region: '',
      exchangeId: '',
      tpnCode: '4302274',
      date: '10/24/2017 10:32:26 AM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Oun Muhammad',
      username: 'SDSFTR.OUN',
      cnic: '33105-0750140-7',
      cellNumber: '0307-7007314',
      region: '',
      exchangeId: '',
      tpnCode: '12171217',
      date: '1/11/2024 3:42:24 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'MUHAMMAD IBRAHIM',
      username: 'MIBRAHIM.F$13',
      cnic: '35202-1410471-9',
      cellNumber: '0304-4170479',
      region: '',
      exchangeId: '',
      tpnCode: '12181218',
      date: '4/14/2020 5:19:12 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Majid Ali',
      username: 'MajidAli.FS',
      cnic: '34202-0795429-5',
      cellNumber: '03446181385',
      region: '',
      exchangeId: '',
      tpnCode: '12181218',
      date: '1/7/2019 11:04:56 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'Muhammad Attiq',
      username: 'SDSLTRS.ATTIQ',
      cnic: '35103-7310920-5',
      cellNumber: '0331-6125524',
      region: '',
      exchangeId: '',
      tpnCode: '12171217',
      date: '6/4/2024 12:14:56 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'ALI AFFAN',
      username: 'FSALTRS.AFFAN',
      cnic: '35202-3156917-1',
      cellNumber: '0323-4315595',
      region: '',
      exchangeId: '',
      tpnCode: '12171217',
      date: '8/28/2023 4:20:18 PM',
      statusText: 'Deactive'
    },
    {
      status: 'Active',
      tpn: 'M.NAZIR',
      username: 'RDRTRT4.Nazir',
      cnic: '21105-6888425-1',
      cellNumber: '0345-4448938',
      region: '',
      exchangeId: '',
      tpnCode: '4101231',
      date: '2/4/2018 8:51:46 PM',
      statusText: 'Deactive'
    }
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium inline-flex items-center";
    if (status === "Active") {
      return (
        <span className={`${baseClasses} bg-green-100 text-green-800`}>
          <CheckCircle className="w-3 h-3 mr-1" />
          Active
        </span>
      );
    } else {
      return (
        <span className={`${baseClasses} bg-red-100 text-red-800`}>
          <XCircle className="w-3 h-3 mr-1" />
          Deactive
        </span>
      );
    }
  };

  const ResultsTable = () => (
    <div className="w-full bg-white rounded-lg border border-gray-200 mb-6">
      <div className="w-full overflow-x-auto custom-table-scroll" style={{ maxHeight: '600px' }}>
        <table className="w-full" style={{ minWidth: '1400px' }}>
          <thead className="bg-green-500 text-white sticky top-0 z-10">
            <tr>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase" style={{width: '80px'}}>Status</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">TPN</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Username</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">CNIC</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Cell Number</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Region</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Exchange ID</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">TPN Code</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Date</th>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.map((user, index) => (
              <tr key={index} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-3 py-3 text-center">
                  {getStatusBadge(user.status)}
                </td>
                <td className="px-3 py-3 text-xs font-medium text-gray-900 whitespace-nowrap">{user.tpn}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{user.username}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{user.cnic}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{user.cellNumber}</td>
                <td className="px-3 py-3 text-xs text-gray-600">{user.region || '-'}</td>
                <td className="px-3 py-3 text-xs text-gray-600">{user.exchangeId || '-'}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{user.tpnCode}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{user.date}</td>
                <td className="px-3 py-3 text-center">
                  <span className="text-xs text-red-600 font-medium">{user.statusText}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-center">
        <div className="flex space-x-1">
          <button className="px-3 py-1 text-xs bg-green-500 text-white rounded">1</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">2</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">3</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">4</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">5</button>
          <span className="px-3 py-1 text-xs text-gray-500">...</span>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">10</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg p-3 text-white shadow-lg mx-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
              alt="PTCL Logo" 
              className="h-6 w-auto object-contain bg-white p-1 rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{display: 'none'}}>
              <User className="w-3 h-3" />
            </div>
          </div>
          
          <div className="flex-1 text-center px-2">
            <h1 className="text-sm font-bold">User Status</h1>
            <p className="text-green-100 text-xs hidden sm:block">View and manage user account status</p>
          </div>
          
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs hidden sm:inline">Secured</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white mx-4 mb-4 rounded-b-lg shadow-lg flex-1 overflow-hidden">
        {/* Search Section */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-wrap items-end gap-4 justify-center">
            {/* Username Search */}
            <div className="w-full max-w-md">
              <label className="block text-xs font-medium text-gray-700 mb-1">Username:</label>
              <input
                type="text"
                value={searchCriteria.username}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Enter username to search"
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md flex items-center space-x-1"
            >
              <Search className="w-3 h-3" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {!showResults ? (
          <div className="p-8 text-center text-gray-500">
            <User className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm">Please enter a username and click Search to view user status</p>
          </div>
        ) : (
          <div className="p-4 overflow-auto">
            <ResultsTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserStatusPage;