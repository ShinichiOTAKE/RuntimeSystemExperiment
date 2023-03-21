import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useModalStore } from "@/store/modal";

export type ModalState<T> = {
//  show: boolean;
  handleOk: (param: T) => void;
  handleCancel: () => void;
};
type RenderModalParam<I, O> = {
  modalState: ModalState<O>;
  showModalParam: I; // 関数呼び出し時のパラメータ
};
type RenderModal<I, O> = (
  param: RenderModalParam<I, O>
) => React.ReactElement<any, any>;

type RenderParam<I, O> = {
  showModal: (param: I) => Promise<O>;
};

type Render<I, O> = (
  param: RenderParam<I, O>
) => React.ReactElement<any, any> | null;

type Props<I, O> = {
  initialParam: I;
  renderModal: RenderModal<I, O>;
//  context?: React.Context<(params: I) => Promise<O>>;
//  context?: React.Context<(params: I) => Promise<O>>;
  children?: React.ReactNode;
  render?: Render<I, O>;
};

export function WithPromiseModal<I, O = void>({
  initialParam,
  renderModal,
  children,
//  context,
  render,
}: Props<I, O>): React.ReactElement {
  const [show, setShow] = useState(false);
  const [param, setParam] = useState<I>(initialParam);

  // 関数をStateに設定する時は　() => 設定したい関数
  const [handleOk, setHandleOk] = useState(() => () => {});
  const [handleCancel, setHandleCancel] = useState(() => () => {});

  // ダイアログで良くあるtransitionは結構重いから
  // useCallbackを使用してダイアログのState変更時に利用する側のrenderが走らないようにしておく
  const showModal = useCallback((param: I) => {
    return new Promise<O>((resolve, reject) => {
      console.log('confirm called');
      setShow(true);
      setParam(param);
      setHandleOk(() => (param: O) => {
        setShow(false);
        resolve(param);
      });
      setHandleCancel(() => () => {
        setShow(false);
        reject();
      });
    });
  }, []);

  const [typeofI, setTypeofI] = useState<string>();
  useEffect(() => {
    setTypeofI(typeof(initialParam));
  }, []);

  const memorizedRender = useMemo(() => {
    return render ? render({ showModal }) : null;
  }, [render, showModal]);

  return (
//    <>
//      {context ? (
//        <context.Provider value={showModal}>{children}</context.Provider>
//      ) : (
//        children
//      )}
//      {children}
    <>
      {memorizedRender}
      { show ?
        <>          
          {renderModal({
//        modalState: { show, handleOk, handleCancel },
            modalState: { handleOk, handleCancel },
            showModalParam: param,
          })}
        </>
      : null
      }
    </>
  );
};