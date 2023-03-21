import React from 'react';
import { ModalState } from '@/component/withPromiseModal';
//import { ConfirmParam } from '@/store/context';
//
//type Props<T = void> = ModalState<T> & ConfirmParam;
import { ModalInput } from "@/feature/test"
type Props<T = void> = ModalState<T> & ModalInput;

const ConfirmModal: React.FC<Props> = ({
//  show,
  handleOk,
  handleCancel,
  initialSelectedValue,
//  title,
//  message,
//  test,
}) => {
  return (
      <>
        {
//          show ?
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className= "relative bg-white mx-auto my-auto p-5 rounded">
                <h1>{initialSelectedValue}</h1>
                <p onClick={() => handleCancel()}>cancel</p>
                <p onClick={() => handleOk()}>ok</p>
              </div>
            </div>
 //         : null
        }
      </>
  );
};
export default ConfirmModal;