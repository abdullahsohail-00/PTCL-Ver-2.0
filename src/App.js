import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate
} from 'react-router-dom';

// Authentication
import LoginPage from './components/auth/LoginPage';

// Layout wrapper
import Layout from './components/layout/Layout';

// Administration
import FeasibilityMapsPage from './components/administration/FeasibilityMapsPage';
import InsertVendorCodePage from './components/administration/InsertVendorCodePage';
import RestoreOrderForm from './components/administration/RestoreOrderForm';

// Vendor information
import VendorInfoDisplay from './components/vendorinformation/VendorInfoDisplay';

// Management – DDS
import DDSExistingCustomer from './components/management/DDS/DDSExistingCustomer';
import DDSExistingCustomerDetails from './components/management/DDS/DDSExistingCustomerDetails';
import DDSNewCustomer from './components/management/DDS/DDSNewCustomer';
import DDSNewCustomerDetail from './components/management/DDS/DDSNewCustomerDetail';
import DDSRetailer from './components/management/DDS/DDSRetailer';
import DDSRetailerDetails from './components/management/DDS/DDSRetailerDetails';
import DDSSummary from './components/management/DDS/DDSSummary';

// Management – General / SMB-DDS
import CreateUserPage from './components/management/CreateUserPage';
import OrderDetailsPage from './components/management/OrderDetailsPage';
import TPNRDIDsPage from './components/management/TPNRDIDsPage';
import UserStatusPage from './components/management/UserStatusPage';
import SMBNewCustomerForm from './components/management/SMB-DDS/SMBNewCustomerForms';
import SMBExistingCustomerForm from './components/management/SMB-DDS/SMBExistingCustomerForm';
import SMBNewCustomerDetails from './components/management/SMB-DDS/SMBNewCustomerDetails';
import SMBExistingCustomerDetails from './components/management/SMB-DDS/SMBExistingCustomerDetails';
import SMBSummary from './components/management/SMB-DDS/SMBSummary';

// Orders
import CorporateCustomerOrders from './components/orders/CorporateCustomerOrders';
import ExistingCustomerNewOrder from './components/orders/ExistingCustomerNewOrder';
import NewCorporateCustomerOrder from './components/orders/NewCorporateCustomerOrder';
import NewCustomerOrder from './components/orders/NewCustomerOrder';
import NewFFCustomerOrder from './components/orders/NewFFCustomerOrder';

// -----------------------------------------------------------------------------
//  PRIVATE ROUTE GUARD
// -----------------------------------------------------------------------------
const PrivateRoute = () => {
    const token = localStorage.getItem('authToken');
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

// -----------------------------------------------------------------------------
//  ROUTE COLLECTION COMPONENT – this sits INSIDE BrowserRouter so we can use
//  hooks such as useNavigate safely.
// -----------------------------------------------------------------------------
const AppRoutes = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));

  // Handle successful login → set state & navigate to default page
  const handleLoginSuccess = () => {
    // Store a simple flag/token so PrivateRoute passes.
    if (!localStorage.getItem('authToken')) {
      localStorage.setItem('authToken', 'session');
    }
    setIsLoggedIn(true);
    navigate('/vendor-info', { replace: true });
  };

  // Handle logout → clear storage & return to login screen
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  };

  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />

      {/* Private – wrapped by auth guard */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout onLogout={handleLogout} />}>
          {/* Vendor information */}
          <Route path="vendor-info" element={<VendorInfoDisplay />} />

          {/* Administration */}
          <Route path="feasibility-maps" element={<FeasibilityMapsPage />} />
          <Route path="insert-vendor-code" element={<InsertVendorCodePage />} />
          <Route path="restore-order" element={<RestoreOrderForm />} />

          {/* Management – DDS */}
          <Route path="dds-existing-customer" element={<DDSExistingCustomer />} />
          <Route path="dds-existing-customer-details" element={<DDSExistingCustomerDetails />} />
          <Route path="dds-new-customer" element={<DDSNewCustomer />} />
          <Route path="dds-new-customer-detail" element={<DDSNewCustomerDetail />} />
          <Route path="dds-retailer" element={<DDSRetailer />} />
          <Route path="dds-retailer-details" element={<DDSRetailerDetails />} />
          <Route path="dds-summary" element={<DDSSummary />} />

          {/* Management – General / SMB-DDS */}
          <Route path="create-user" element={<CreateUserPage />} />
          <Route path="order-details" element={<OrderDetailsPage />} />
          <Route path="tpnrids" element={<TPNRDIDsPage />} />
          <Route path="user-status" element={<UserStatusPage />} />

          {/* SMB DDS (optional) */}
          <Route path="smb-new-customer" element={<SMBNewCustomerForm />} />
          <Route path="smb-existing-customer" element={<SMBExistingCustomerForm />} />
          <Route path="smb-new-customer-details" element={<SMBNewCustomerDetails />} />
          <Route path="smb-existing-customer-details" element={<SMBExistingCustomerDetails />} />
          <Route path="smb-summary" element={<SMBSummary />} />

          {/* Orders */}
          <Route path="corporate-customer-orders" element={<CorporateCustomerOrders />} />
          <Route path="existing-customer-new-order" element={<ExistingCustomerNewOrder />} />
          <Route path="new-corporate-customer-order" element={<NewCorporateCustomerOrder />} />
          <Route path="new-customer-order" element={<NewCustomerOrder />} />
          <Route path="new-ffc-customer-order" element={<NewFFCustomerOrder />} />

          {/* Fallback – redirect to default dashboard */}
          <Route path="*" element={<Navigate to="/vendor-info" replace />} />
        </Route>
      </Route>
    </Routes>
  );
};

// -----------------------------------------------------------------------------
//  APP COMPONENT – wraps the whole application with <BrowserRouter> to enable
//  routing throughout the project.
// -----------------------------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;