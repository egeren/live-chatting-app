import { useAppSelector } from 'hooks';

export const useFindUser = () => {
  const usersData = useAppSelector((state) => state.usersData);

  return (userId: string) => usersData.find((user) => user.id === userId);
};
