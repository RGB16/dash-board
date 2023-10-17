import React, { useState } from 'react';
import './modal.css'; // Import your CSS file for styling


const Modal = ({ onClose, onDone}) => {
  const [currentTab, setCurrentTab] = useState('Basic');



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '', 
    youtube: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDoneClick = () => {
    onDone(formData); // Pass the details back to the parent component
  };
  const switchTab = (tab) => {
    setCurrentTab(tab);
  }




  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Profile</h2>
          <span onClick={onClose} className="close-icon">X</span>
        </div>
        <div className="modal-tabs">
          <div
            className={`modal-tab ${currentTab === 'Basic' ? 'active' : ''}`}
            onClick={() => switchTab('Basic')}
          >
            Basic
          </div>
          <div
            className={`modal-tab ${currentTab === 'Social' ? 'active' : ''}`}
            onClick={() => switchTab('Social')}
          >
            Social
          </div>
        </div>
        <div className="modal-content">
          {currentTab === 'Basic' && (
            <div>
                <label>Enter Name*</label>
                <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Eg.John Doe" 
          />
                <label>Enter Email*</label>
                <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Eg.John@xyz.com"
          />
                <label>Enter Phone</label>
                <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Eg.9123456789"
               
          />
                <button onClick={() => switchTab('Social')}>Next</button>
              </div>
          )}
          {currentTab === 'Social' && (
            <div>
                <label>Instagram Link <span style={{ color: '#999CA0' }} >(optional)</span></label>
                <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleInputChange}
            placeholder="Eg. ..instagram.com/username"
          />
                <label>Youtube Link <span style={{ color: '#999CA0' }} >(optional)</span></label>
                <input
            type="text"
            name="youtube"
            value={formData.youtube}
            onChange={handleInputChange}
            placeholder="Eg. ..youtube/username"
          />
                <button onClick={() => switchTab('Basic')}>Back</button>
                <button onClick={handleDoneClick}>Done</button>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
