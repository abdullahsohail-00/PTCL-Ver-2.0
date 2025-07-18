import React, { useState, useEffect } from 'react';
import { User, Search, Download, Shield, CheckCircle, XCircle } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SearchBar from '../common/SearchBar';
import ResultsTable from '../common/ResultsTable';

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

  const columns = [
    { key: 'status', label: 'Status', className: 'text-center' },
    { key: 'tpn', label: 'TPN' },
    { key: 'username', label: 'Username' },
    { key: 'cnic', label: 'CNIC' },
    { key: 'cellNumber', label: 'Cell Number' },
    { key: 'region', label: 'Region' },
    { key: 'exchangeId', label: 'Exchange ID' },
    { key: 'tpnCode', label: 'TPN Code' },
    { key: 'date', label: 'Date' },
    { key: 'statusText', label: 'Status', className: 'text-center' },
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

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="mx-4 mt-4">
        <HeaderSection title="User Status" subtitle="View and manage user account status" />
      </div>

      {/* Main Content */}
      <div className="bg-white mx-4 mb-4 rounded-b-lg shadow-lg flex-1 overflow-hidden">
        {/* Search Section */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-wrap items-end gap-4 justify-center">
            {/* Username Search */}
            <div className="w-full max-w-md">
              <SearchBar
                label="Username:"
                value={searchCriteria.username}
                onChange={handleSearchChange}
                placeholder="Enter username to search"
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
            <ResultsTable
              columns={columns}
              rows={userData.map(user => ({
                ...user,
                status: getStatusBadge(user.status),
                statusText: <span className="text-xs text-red-600 font-medium">{user.statusText}</span>,
              }))}
              pagination={{ currentPage: 1, totalPages: 10 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserStatusPage;