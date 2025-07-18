import React from 'react';

/**
 * HeaderSection
 * --------------
 * Reusable top-bar header with gradient background and centered title.
 * Props:
 *  - title (string)      : main heading text (required)
 *  - subtitle (string)   : optional sub-heading displayed beneath title
 *  - rightSlot (node)    : optional element rendered in the right placeholder (e.g., actions)
 *  - leftSlot (node)     : optional element rendered in the left placeholder (e.g., logo)
 */
const HeaderSection = ({ title, subtitle, leftSlot = null, rightSlot = null }) => (
  <div className="bg-gradient-to-t from-green-500 via-green-600 to-teal-600 rounded-t p-3 text-white shadow-md">
    <div className="flex items-center justify-between">
      {/* Left placeholder (e.g. logo) */}
      {leftSlot ? <div className="flex-shrink-0 mr-2">{leftSlot}</div> : <span />}

      {/* Center title */}
      <div className="flex-1 text-center">
        <h1 className="text-sm font-bold">{title}</h1>
        {subtitle && <p className="text-green-100 text-xs">{subtitle}</p>}
      </div>

      {/* Right placeholder */}
      {rightSlot ? <div className="flex-shrink-0 ml-2">{rightSlot}</div> : <span />}
    </div>
  </div>
);

export default HeaderSection; 