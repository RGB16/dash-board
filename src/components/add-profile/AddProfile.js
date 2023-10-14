import React, { useState } from 'react';
import './addprofile.css'; // Import your component's CSS
import Modal from '../modal/Modal';
import {AiOutlineInstagram,AiOutlineWhatsApp,AiOutlineMail,AiOutlineYoutube} from 'react-icons/ai';

const AddProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  }


  const [profileDetails, setProfileDetails] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    youtube:'',
});

const handleDone = (details) => {
  setProfileDetails(details);
  onClose();
};

  return (
    <div className="add-profile">
     {profileDetails.name === "" && <div> <div className="add-icon" onClick={openModal}>
        +
      </div>
    <div className='text-profile'>
        Add Profile
    </div>
</div>}
      {isModalOpen && <Modal onClose={onClose} onDone={handleDone} />}


{profileDetails.name !== "" &&
      <div className="add-profile">
        <h2>{profileDetails.name}</h2>
        <div className='profile-content'>
          <div className='anchor-flex'>
          <a href={profileDetails.phone}><span><AiOutlineWhatsApp/></span>{profileDetails.phone}</a>
          <a href={profileDetails.email}><span><AiOutlineMail/></span>{profileDetails.email}</a>
          </div>
          <div className='anchor-flex'>
          <a href={profileDetails.instagram}><span><AiOutlineInstagram/></span>{profileDetails.instagram}</a>
          <a href={profileDetails.youtube}><span><AiOutlineYoutube/></span>{profileDetails.name}</a>
          </div>
        </div>
      </div> }
    </div>
  );
};

export default AddProfile;