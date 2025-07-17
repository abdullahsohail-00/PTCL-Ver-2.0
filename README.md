# PTCL-Ver-3.0

## Overview

**PTCL-Ver-3.0** is a modern web-based administration and management dashboard for PTCL, designed to streamline vendor management, order processing, user administration, and service feasibility mapping. Built with React and Tailwind CSS, the platform provides a responsive and user-friendly interface for internal operations.

## Features

- **Vendor Management:** View, verify, and manage vendor information.
- **Order Processing:** Create and manage orders for existing and new customers, including corporate and SMB clients.
- **User Administration:** Manage user accounts, statuses, and permissions.
- **Feasibility Maps:** Visualize service coverage and availability.
- **Reporting & Summaries:** Access detailed summaries and export data for SMB and DDS operations.
- **Secure Access:** Role-based access and secure authentication.
- **Responsive Design:** Optimized for desktop and mobile devices.

## Project Structure

```
src/
  components/
    administration/
    layout/
    management/
    orders/
    vendorinformation/
    ...
  App.js
  index.js
  ...
public/
  ...
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/PTCL-Ver-3.0.git
   cd PTCL-Ver-3.0
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

## Usage

- Access the dashboard at `http://localhost:3000` after running the development server.
- Use the sidebar to navigate between different modules (Vendor Info, Orders, User Management, Feasibility Maps, etc.).
- Only authorized users can access certain administrative features.

## Technologies Used

- **React** – Frontend library for building user interfaces
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **Node.js & npm** – JavaScript runtime and package manager
- **Other dependencies:** (see `package.json` for full list)

## Customization

- Update theme and styles via `tailwind.config.js`.
- Add or modify components in the `src/components/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Sohail Iftikhar (Project Owner)
- [Your Email Here]
