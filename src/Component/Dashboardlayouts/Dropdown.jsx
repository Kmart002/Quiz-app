import React, { useState } from 'react';
import './Dropdown.css'; 
import { Link } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedItem || 'Select Quiz'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
        <Link to='/htmlQuest'><li>HTML</li></Link>
        <Link to='/cssQuest'><li>CSS</li></Link>
        <Link to='/javaQuest'><li>JAVASCRIPT</li></Link>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
