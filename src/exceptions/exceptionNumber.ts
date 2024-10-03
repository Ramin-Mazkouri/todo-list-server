import { NotFoundException } from '@nestjs/common';

export const exceptionNumber = (
  num: string | number,
  title: string,
): number => {
  const convertNum = Number(num);
  if (isNaN(convertNum))
    throw new NotFoundException(`Please, enter ${title} number: '${num}' `);
  return convertNum;
};
