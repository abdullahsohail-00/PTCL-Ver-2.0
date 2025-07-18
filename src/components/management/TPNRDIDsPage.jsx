import React, { useState, useEffect } from 'react';
import { User, Search, Download, Lock, Edit, Hash } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import FormField from '../common/FormField';

const TPNRDIDsPage = () => {
  const [filters, setFilters] = useState({
    username: '',
    cnic: '',
    cellNumber: '',
    territoryId: ''
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

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    setShowResults(true);
    console.log('Searching with filters:', filters);
  };

  // Sample data based on the screenshots
  const tpnRdData = [
    {
      tpn: "Baber & Co. (RD.)",
      username: "RDBABERANDCO11",
      cnic: "38403-8133976-3",
      cellNumber: "0344-7475556",
      date: "5/25/2017 8:43:11 AM",
      territoryId: "RDBABERANDCO11",
      parentId: "4304205",
      vendorCode: "4304205",
      retailerAddress: "49 tail sargodha",
      shopLatitude: "32.03967",
      shopLongitude: "72.69392",
      companyName: "-",
      osid: "-",
      thirdParty: "-",
      region: "-",
      exchange: "-",
      epi: "-",
      designation: "-",
      ufoneWallet: "-",
      statusId: "Active",
      roleId: "2"
    },
    {
      tpn: "World Master Telecom (RD.)",
      username: "RDWRLDMASTRTEL11",
      cnic: "33303-7026423-1",
      cellNumber: "0334-6277837",
      date: "5/25/2017 9:45:32 AM",
      territoryId: "RDWRLDMASTRTEL11",
      parentId: "3602875",
      vendorCode: "3602875",
      retailerAddress: "Shorkot Road Toba Tek Singh",
      shopLatitude: "30.968706",
      shopLongitude: "72.479493",
      companyName: "-",
      osid: "-",
      thirdParty: "-",
      region: "-",
      exchange: "-",
      epi: "-",
      designation: "-",
      ufoneWallet: "-",
      statusId: "Active",
      roleId: "2"
    },
    {
      tpn: "Saleem Communication (RD.)",
      username: "RDSALEEMCOMM04",
      cnic: "14101-7727474-5",
      cellNumber: "03318881888",
      date: "6/1/2017 8:37:00 PM",
      territoryId: "RDSALEEMCOMM04",
      parentId: "4300260",
      vendorCode: "4300260",
      retailerAddress: "East Circular Road, Dera Ismail Khan, Pakistan",
      shopLatitude: "31.8265933",
      shopLongitude: "70.9121598",
      companyName: "PTCL",
      osid: "-",
      thirdParty: "NTR",
      region: "-",
      exchange: "RD",
      epi: "-",
      designation: "-",
      ufoneWallet: "-",
      statusId: "Active",
      roleId: "2"
    },
    {
      tpn: "parvez.ali@ptcl.net.pk",
      username: "parvez.ali",
      cnic: "-",
      cellNumber: "-",
      date: "11/15/2019 11:31:52 AM",
      territoryId: "parvez.ali",
      parentId: "-",
      vendorCode: "-",
      retailerAddress: "-",
      shopLatitude: "-",
      shopLongitude: "-",
      companyName: "-",
      osid: "-",
      thirdParty: "-",
      region: "-",
      exchange: "-",
      epi: "-",
      designation: "-",
      ufoneWallet: "-",
      statusId: "Active",
      roleId: "4"
    },
    {
      tpn: "NRN Communication",
      username: "TPNNRNComm.10",
      cnic: "33100-0698590-1",
      cellNumber: "03226600140",
      date: "4/14/2016 10:57:33 AM",
      territoryId: "TPNNRNComm.10",
      parentId: "4300680",
      vendorCode: "4300680",
      retailerAddress: "-",
      shopLatitude: "-",
      shopLongitude: "-",
      companyName: "-",
      osid: "-",
      thirdParty: "-",
      region: "-",
      exchange: "-",
      epi: "-",
      designation: "-",
      ufoneWallet: "-",
      statusId: "In-Active",
      roleId: "2"
    }
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    if (status === "Active") {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else if (status === "In-Active") {
      return `${baseClasses} bg-red-100 text-red-800`;
    } else {
      return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const ResultsTable = () => (
    <div className="w-full bg-white rounded-lg border border-gray-200 mb-6">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center">
          <Hash className="w-4 h-4 mr-2 text-blue-600" />
          TPN/RD IDs Records
        </h3>
        <button
          onClick={() => {
            console.log('Exporting to Excel...');
            alert('Exporting data to Excel...');
          }}
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-xs font-medium flex items-center"
        >
          <Download className="w-3 h-3 mr-1" />
          Export to Excel
        </button>
      </div>
      
      <div className="w-full overflow-x-auto custom-table-scroll" style={{ maxHeight: '600px' }}>
        <table className="w-full" style={{ minWidth: '2400px' }}>
          <thead className="bg-green-500 text-white sticky top-0 z-10">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">TPN</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Username</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">CNIC</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Cell Number</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Date</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Territory ID</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Parent ID</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Vendor Code</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Retailer Address</th>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase" colSpan="2">Shop</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Company Name</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">OSID</th>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase" colSpan="3">Third-Party/Region/Exchange</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Designation</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Ufone Wallet</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Status ID</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase" rowSpan="2">Role ID</th>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase" rowSpan="2">Action</th>
            </tr>
            <tr>
              <th className="px-3 py-2 text-left text-xs font-semibold">Latitude</th>
              <th className="px-3 py-2 text-left text-xs font-semibold">Longitude</th>
              <th className="px-3 py-2 text-left text-xs font-semibold">Party</th>
              <th className="px-3 py-2 text-left text-xs font-semibold">Region</th>
              <th className="px-3 py-2 text-left text-xs font-semibold">EPI</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tpnRdData.map((record, index) => (
              <tr key={index} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-3 py-3 text-xs font-medium text-gray-900 whitespace-nowrap">{record.tpn}</td>
                <td className="px-3 py-3 text-xs font-medium text-gray-900 whitespace-nowrap">{record.username}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.cnic}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.cellNumber}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.date}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.territoryId}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.parentId}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.vendorCode}</td>
                <td className="px-3 py-3 text-xs text-gray-600">
                  <div className="max-w-[200px]" title={record.retailerAddress}>
                    {record.retailerAddress}
                  </div>
                </td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.shopLatitude}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.shopLongitude}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.companyName}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.osid}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.thirdParty}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.region}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.epi}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.designation}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.ufoneWallet}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <span className={getStatusBadge(record.statusId)}>
                    {record.statusId}
                  </span>
                </td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{record.roleId}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="flex space-x-1 justify-center">
                    <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-2 py-1 rounded text-xs font-medium inline-flex items-center">
                      <Lock className="w-3 h-3 mr-1" />
                      Change Password
                    </button>
                    <button className="bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded text-xs font-medium inline-flex items-center">
                      <Edit className="w-3 h-3 mr-1" />
                      Edit Profile
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="mx-4 mt-4">
        <HeaderSection title="TPN/RD IDs" subtitle="Manage and track all TPN/RD ID records" />
      </div>

      {/* Main Content */}
      <div className="bg-white mx-4 mb-4 rounded-b-lg shadow-lg flex-1 overflow-hidden">
        {/* Search Section */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Username */}
            <FormField
              label="Username:"
              value={filters.username}
              onChange={(value) => handleFilterChange('username', value)}
              placeholder="Enter username"
            />

            {/* CNIC */}
            <FormField
              label="CNIC:"
              value={filters.cnic}
              onChange={(value) => handleFilterChange('cnic', value)}
              placeholder="Enter CNIC"
            />

            {/* Cell Number */}
            <FormField
              label="Cell Number:"
              value={filters.cellNumber}
              onChange={(value) => handleFilterChange('cellNumber', value)}
              placeholder="Enter cell number"
            />

            {/* Territory ID */}
            <FormField
              label="Territory ID:"
              value={filters.territoryId}
              onChange={(value) => handleFilterChange('territoryId', value)}
              placeholder="Enter territory ID"
            />

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md flex items-center justify-center space-x-1"
              >
                <Search className="w-3 h-3" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {!showResults ? (
          <div className="p-8 text-center text-gray-500">
            <User className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm">Please enter search criteria and click Search to view TPN/RD ID records</p>
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

export default TPNRDIDsPage;