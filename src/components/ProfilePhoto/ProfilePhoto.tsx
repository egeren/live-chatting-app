import React, { useState, useEffect } from 'react';
import { Container, UploadImageContainer } from './styled';
import { IoPeople, IoAdd } from 'react-icons/io5';
import { ProfilePhotoProps } from 'helpers/interfaces/components';
import { toast } from 'react-toastify';

function ProfilePhoto(props: ProfilePhotoProps) {
  const { editable, className, photo, onChange } = props;
  const [selectedPhoto, setSelectedPhoto] = useState(photo);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files && e.target.files[0].type.includes('image')) {
      console.log(e.target.files[0].type);
      setSelectedPhoto(URL.createObjectURL(e.target.files[0]));
    } else {
      toast.error('Please select an image file.', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    }
  };

  return (
    <Container styles={className} editable={editable}>
      <Photo photo={selectedPhoto} />
      <UploadImageContainer>
        <input
          type="file"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          onChange={handlePhotoChange}
          accept="image/*"
        />
        <IoAdd className="w-1/3 h-1/3 text-white" />
      </UploadImageContainer>
    </Container>
  );
}

const Photo = (props: { photo: string | undefined }) => {
  const { photo } = props;

  if (photo) {
    return (
      <img src={photo} alt="profile" className="w-full h-full object-cover" />
    );
  } else return <IoPeople className="w-2/3 h-2/3" />;
};

export default ProfilePhoto;
