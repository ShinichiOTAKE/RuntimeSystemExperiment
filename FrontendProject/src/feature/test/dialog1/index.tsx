import React ,{ ReactElement, ReactNode }from "react";
import { ModalState } from "@/component/ModalDialog";

export type DialogArgument = {
  title: string,
  message: string,
};

export type DialogResult = {
  value: number,  
};

type Props = DialogArgument & ModalState<DialogResult>;

//export const TestModalDialog: React.FC<Props> = (props) => {
export const TestModalDialog: React.FC<Props> = ({...props}: Props) => {
  return (
    <>
      {
        <>
          <h1>{props.title}</h1>
          <br/>
          <h3>{props.message}</h3>
          <br/>
          <p>表示中</p>
          <br/>
          <p onClick={() => props.handleSelect({value: 0})}>閉じる</p>
        </>
      }
    </>
  )
};

//          <li>
//            <ul onClick={() => handleSelect({value: 7})}>Select</ul>
//            <ul onClick={() => handleCancel()}>Cancel</ul>
//          </li>