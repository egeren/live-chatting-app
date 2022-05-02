import { useEffect } from 'react';

export const getContactsBarSize = () => {
  const container = document.getElementById('contacts-container');
  return { width: container?.clientWidth, height: container?.clientHeight };
};

export const screen = () => {
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      console.log(e);
    });
  }, []);
  return true;
};
