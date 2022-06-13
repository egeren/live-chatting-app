import React, { useState, useEffect } from 'react';
import { Container, UploadImageContainer } from './styled';
import { IoPeople, IoAdd, IoChatbox } from 'react-icons/io5';
import { ProfilePhotoProps } from 'helpers/interfaces/components';
import { toast } from 'react-toastify';

function Photo(props: ProfilePhotoProps) {
  const { editable, className, photo, onChange, type } = props;
  const [selectedPhoto, setSelectedPhoto] = useState(photo);

  useEffect(() => {
    setSelectedPhoto(photo);
  }, [photo]);

  const gradient = photo?.includes('{gradient}')
    ? photo.replace('{gradient}', '')
    : '';

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0].type.includes('image')
    ) {
      if (e.target.files[0].size > 3000000) {
        toast.error('Image file should under 3MB.', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: 'light',
        });
      } else {
        setSelectedPhoto(URL.createObjectURL(e.target.files[0]));
        if (onChange) onChange(e);
      }
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
    <Container styles={className} $editable={editable} $gradient={gradient}>
      <PhotoContent photo={selectedPhoto} type={type} />
      {editable && (
        <UploadImageContainer>
          <input
            type="file"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            onChange={handlePhotoChange}
            accept="image/*"
          />
          <IoAdd className="w-1/3 h-1/3 text-white" />
        </UploadImageContainer>
      )}
    </Container>
  );
}

interface IPhotoContentProps extends ProfilePhotoProps {
  photo: string | undefined;
}

const PhotoContent = (props: IPhotoContentProps) => {
  const { photo, type } = props;

  const url = process.env.REACT_APP_SERVER_ADDRESS;

  if (photo && !photo.includes('{gradient}')) {
    return (
      <img
        src={photo.includes('blob') ? photo : url + '/' + photo}
        alt="profile"
        className="w-full h-full object-cover"
      />
    );
  } else {
    if (type === 'chat') {
      return <IoChatbox className="w-2/3 h-2/3 text-white" />;
    } else {
      return <IoPeople className="w-2/3 h-2/3 text-white" />;
    }
  }
};

export default Photo;
