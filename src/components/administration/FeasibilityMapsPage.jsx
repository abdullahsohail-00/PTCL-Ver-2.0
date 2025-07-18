import React, { useState } from 'react';
import {
  MapPin, Search, Layers, Globe, Map
} from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SearchBar from '../common/SearchBar';
import CheckboxCluster from '../common/CheckboxCluster';
import ToggleButtonPair from '../common/ToggleButtonPair';

const FeasibilityMapsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServices, setSelectedServices] = useState({
    gpon: true,
    vdsl: true,
    adsl: false
  });
  const [mapView, setMapView] = useState('map');
  const [logoError, setLogoError] = useState(false);

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Search functionality would be implemented here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <HeaderSection title="Feasibility Maps" subtitle="Service coverage and availability" />

      {/* Controls Panel */}
      <div className="bg-white border-b border-gray-200 p-3 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <CheckboxCluster
            options={[
              { value: 'gpon', label: 'GPON', colorClass: 'text-green-600' },
              { value: 'vdsl', label: 'VDSL', colorClass: 'text-blue-600' },
              { value: 'adsl', label: 'ADSL', colorClass: 'text-purple-600' }
            ]}
            selected={selectedServices}
            onToggle={(val)=>handleServiceToggle(val)}
          />

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder="Search for a place..."
            className="w-64"
          />

          <ToggleButtonPair
            value={mapView}
            onChange={setMapView}
            options={[
              { value: 'map', label: 'Map', icon: Map },
              { value: 'satellite', label: 'Satellite', icon: Globe }
            ]}
          />
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative bg-gray-100">
        {/* Map Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-100 via-blue-100 to-purple-100"></div>
          </div>
          
          {/* Map Content Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-500 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Feasibility Map</h3>
              <p className="text-sm text-gray-500">Interactive map showing service coverage</p>
              <p className="text-xs text-gray-400 mt-2">
                {selectedServices.gpon && <span className="text-green-600">GPON </span>}
                {selectedServices.vdsl && <span className="text-blue-600">VDSL </span>}
                {selectedServices.adsl && <span className="text-purple-600">ADSL </span>}
                coverage areas
              </p>
            </div>
          </div>

          {/* Simulated Coverage Areas */}
          {selectedServices.gpon && (
            <div className="absolute top-1/3 left-1/3 w-32 h-24 bg-green-400 opacity-30 rounded-lg transform rotate-12"></div>
          )}
          {selectedServices.vdsl && (
            <div className="absolute top-1/2 right-1/3 w-28 h-20 bg-blue-400 opacity-30 rounded-lg transform -rotate-6"></div>
          )}
          {selectedServices.adsl && (
            <div className="absolute bottom-1/3 left-1/2 w-24 h-16 bg-purple-400 opacity-30 rounded-lg transform rotate-45"></div>
          )}
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="bg-white border border-gray-300 rounded shadow-sm p-2 hover:bg-gray-50 transition-all duration-200">
            <Layers className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white border border-gray-300 rounded shadow-sm p-2 hover:bg-gray-50 transition-all duration-200">
            <MapPin className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white border border-gray-300 rounded shadow-sm p-3">
          <h4 className="text-xs font-semibold text-gray-800 mb-2">Legend</h4>
          <div className="space-y-1">
            {selectedServices.gpon && (
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
                <span className="text-xs text-gray-600">GPON Coverage</span>
              </div>
            )}
            {selectedServices.vdsl && (
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded mr-2"></div>
                <span className="text-xs text-gray-600">VDSL Coverage</span>
              </div>
            )}
            {selectedServices.adsl && (
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded mr-2"></div>
                <span className="text-xs text-gray-600">ADSL Coverage</span>
              </div>
            )}
          </div>
        </div>

        {/* Coordinates Display */}
        <div className="absolute top-4 left-4 bg-white border border-gray-300 rounded shadow-sm p-2">
          <div className="text-xs text-gray-600">
            <div>Latitude: 33.6844</div>
            <div>Longitude: 73.0479</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeasibilityMapsPage;