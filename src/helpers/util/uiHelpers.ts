import { useEffect } from 'react';

export const getContactsBarSize = () => {
  const container = document.getElementById('contacts-container');
  return { width: container?.clientWidth, height: container?.clientHeight };
};
