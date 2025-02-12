import { User } from '@prisma/client';
import { IUser } from '../interfaces/IUser';
import prismaContext from '../lib/prisma/prismaContext';

export const createUser = async (userInput: IUser): Promise<User> => {
  return prismaContext.prisma.user.create({
    data: userInput,
  });
};

export const deleteUser = async (id: string): Promise<User | string | null> => {
  const user = await prismaContext.prisma.user.delete({
    where: {
      id: id,
    },
  });
  if (user == null) return 'User not found';
  return user;
};

export const updateUser = async (
  id: string,
  userInput: IUser
): Promise<User | string | null> => {
  const user = await prismaContext.prisma.user.update({
    where: {
      id: id,
    },
    data: userInput,
  });
  if (user == null) return 'User not found';
  return user;
};

export const getUser = async (id: string): Promise<User | string | null> => {
  const user = await prismaContext.prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (user == null) return 'User not found';
  return user;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await prismaContext.prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};

export const getAllUsers = async (): Promise<User[]> => {
  const users = await prismaContext.prisma.user.findMany();
  return users;
};

export const getFewUsers = async (
  take: number,
  skip: number
): Promise<User[]> => {
  const users = await prismaContext.prisma.user.findMany({
    take: take,
    skip: skip,
  });
  return users;
};

// export const editUser = async (
//   id: string,
//   userInput: IUser
// ): Promise<User | string | null> => {
//   const user = await prismaContext.prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: userInput,
//   });
//   if (user == null) return 'User not found';
//   return user;
// };
