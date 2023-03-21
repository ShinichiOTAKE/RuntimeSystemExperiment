import React, { useContext } from 'react';

// コンテキストで渡すモーダルオープン関数の引数の型
export type ConfirmParam = {
  title: string;
  message: string;
  test: string;
};
export const ConfirmContext = React.createContext(
  async (param: ConfirmParam) => {}
);
export function useConfirm() {
  return useContext(ConfirmContext);
};