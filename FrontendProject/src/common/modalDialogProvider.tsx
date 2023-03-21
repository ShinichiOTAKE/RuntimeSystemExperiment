import React, { ReactElement, ReactNode, Context, useState, useCallback, useMemo } from "react";
import { usePortal } from "@/hooks/usePortal";

const PORTAL_ID = "defalut-portal";

export type ModalState<T> = {
  handleSelect: (result: T) => void,
  handleCancel: () => void,
};
type RenderingModalParameter<I, O> = {
  modalState: ModalState<O>,
  modalArgument: I,
};
type RenderingModal<I, O> = (
  renderParameter: RenderingModalParameter<I, O>
) => React.ReactElement<any, any>;
type Props<I, O> = {
  dialogElement: RenderingModal<I, O>,
  defaultArgument: I,
  children: ReactNode,
  context: Context<(params: I) => Promise<O>>;
};

export const ModalDialogProvider = <I, O = void>({
  dialogElement,
  defaultArgument,
  children,
  context,
}: Props<I, O>): ReactElement => {
  const [ isVisible, setIsVisible ] = useState<boolean>(false);
  const [ argument, setArgument ] = useState<I>(defaultArgument);

  const [ handleSelect, setHandleSelect ] = useState(() => () => {});
  const [ handleCancel, setHandleCancel ] = useState(() => () => {});

  const show = useCallback((argument: I) => {
    return new Promise<O>((resolve, reject) => {
      setIsVisible(true);
      setArgument(argument);
      setHandleSelect(() => (result: O) => {
        setIsVisible(false);
        resolve(result);
      });
      setHandleCancel(() => () => {
        setIsVisible(false);
        reject();
      });
    })
  }, []);

  if (!isVisible) {
    <>{children}</>
  };

  return (
    <>
      {
        isVisible ?
          <>
            <context.Provider value={show}>
              {children}
            </context.Provider>
            {usePortal({
              portalId: PORTAL_ID,
              children: 
                <div className="fixed inset-0 flex justify-center items-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className= "relative bg-white mx-auto my-auto p-5 rounded">
                {dialogElement({
                  modalState: {handleSelect, handleCancel},
                  modalArgument: argument,
                })}</div>
              </div>
            })}
          </>
        : null
      }
    </>
  );
}
  //const setHandleShow = useModalStore((state) => state.setHandleShow);
  //setHandleShow(show);
//  return (
//    <>
//      {
//        isVisible ?
//          <div className="fixed inset-0 flex justify-center items-center">
//            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
//            <div className= "relative bg-white mx-auto my-auto p-5 rounded">
//              {dialogElement({
//                modalState: {handleSelect, handleCancel},
//                modalArgument: argument,
//            })}</div>
//          </div>
//        : null
//      }
//    </>
//  );
//}

//import React, { ReactNode, createContext, FC, useState, useEffect } from "react";
//import { createPortal } from "react-dom";
//import { useModal } from "@/hooks/useModal";

//type Props = {
//  children: ReactNode;
//};

//type ContextType = {
//  open: (modal: ReactNode) => void;
//  close: () => void;
//};

//export const ModalDialogContext = createContext<ContextType>({} as ContextType);

//export const ModalDialogProvider: FC<Props> = ({ children }) => {
//  const [ dialogNode, setDialogNode ] = useState<ReactNode>();
//  const [ isVisible, setIsVisible ] = useState(false);

//  const modalDialog = useModal("modalDialog");

//  const open = (modal: ReactNode) => {
//    setDialogNode(modal);
//  };

//  const close = () => {
//    setDialogNode(null);
//  };

//  useEffect(() => {
//    setIsVisible(true);
//  }, []);

//  if (!isVisible || !modalDialog) {
//    return null;
//  };

//  return (
//    <ModalDialogContext.Provider value={{open, close}}>
//      {children}
      
//    </ModalDialogContext.Provider>
//  );
//};

//{createPortal(dialogNode, modalDialog)}