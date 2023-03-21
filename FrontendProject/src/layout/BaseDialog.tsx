import React, { ReactNode, FC } from "react";

type Props = {
  children: ReactNode,
  onClose?: () => void
};

export const BaseDialogLayout: FC<Props> = ({children, onClose}) =>
  <>
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
      <div className= "relative bg-white mx-auto my-auto p-5 rounded">{children}</div>
    </div>
  </>
;