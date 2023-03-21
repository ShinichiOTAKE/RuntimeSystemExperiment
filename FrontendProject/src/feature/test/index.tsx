import React, { useState, useEffect, lazy, Suspense } from "react";
import { createPortal } from "react-dom";

import { ModalInput, ModalOutput} from "./definition";
//import { useConfirm } from '@/store/context';
import { WithPromiseModal, ModalState } from '@/component/withPromiseModal';
import { useModalStore, useVoteStore } from "@/store/modal";
import { ModalDialog } from "@/component/ModalDialog";
import { DialogArgument, DialogResult } from "./dialog1";
import { useModalDialog2 } from "@/hooks/useModalDaialog2";
import { usePortal } from "@/hooks/usePortal";
import { OkyButton } from "@/component/OkyButton";

export const Feature = () => {
  // コンテキストからconfirm関数を取得するHook
//  const confirm = useConfirm();
//  const confirm = useModalStore<ModalInput, ModalOutput>()((state) => state.handleShow);
//  const handleClick = () => {
//    confirm({ title: '確認', message: '本気ですか？', test: 'テストしてるんだー' })
//      confirm({initialSelectedValue: "テスト中。やっとできそうだよ！"})
//      .then(() => {
//        // はいが押された
//        console.log('はい');
//      })
//      .catch(() => {
//        // いいえが押された
//        console.log('いいえ');
//      });
//  };

//  return (
//      <p onClick={() => handleClick()}>とうろく</p>
//      <p>{confirm.toString()}</p>
//    <>
//      <Content />
//    </>
//  );

//  const aaa = usePortal({
//    portalId: "test",
//    children: <h1>テスト</h1>
//  });

//  return (
//    <>
//      {aaa}
//    </>
//  );

//  const rootContainer = document.createElement("div");
//  rootContainer.setAttribute("id", "test");
//  document.body.appendChild(rootContainer);
//  
//  return (
//    <>
//      {createPortal(
//         <h1>Hello Portals</h1>,
//       document.getElementById("test")! // __next: Next.jsのroot divに適用されているid
//      )};
//    </>
//  );

  const defaultArgument: DialogArgument = {
    title: "",
    message: "",
  };
  const {
    showModalDialog,
    modalPortal,
  } = useModalDialog2<DialogArgument, DialogResult>({
    featureId: "test",
    dialogId: "dialog1",
    defaultArgument: defaultArgument,
  });

  const argument: DialogArgument = {
    title: "タイトルだよ",
    message: "メッセージだがや",
  };

  const handleClick = () => {
    showModalDialog({ ...argument })
      .then(({ value }) => {
        console.log('selected', value.toString);
      })
      .catch(() => {
        console.log('not selected');
      });
  };

  return (
    <>
      {modalPortal}
      <h1>テスト用ページ</h1>
      <br/>
      <OkyButton color="green" wsize="md" hsize="md" onClick={handleClick}>
        検索
      </OkyButton>
    </>
  );
};

// Contextを使わないパターンのテスト
//const Content = () => {
//  return (
//    <WithPromiseModal<ModalInput, ModalOutput>
//      initialParam={{ initialSelectedValue: '' }}
//      renderModal={({
//        modalState: { show, handleOk, handleCancel },
//        modalState: { handleOk, handleCancel },
//        showModalParam, // 型はModalInput
//      }) => {
//        return (
//          <MyModal
//            show={show}
//            handleOk={handleOk}
//            handleCancel={handleCancel}
//            initialSelectedValue={showModalParam.initialSelectedValue}
//          />
//        );
//      }}
//      // Contextを使わずrender propsでモーダルオープン関数を渡すパターン
//      render={({ showModal }) => {
//        // showModal関数のパラメータの型はModalOutput
//        return <MyContent showModal={showModal} />;
//      }}
//    />
//  );
//};

//type MyContentProps = {
//  showModal: (param: ModalInput) => Promise<ModalOutput>;
//};

//const MyContent: React.FC<MyContentProps> = ({ showModal }) => {
//  const [value, setValue] = useState<string>("");
//  console.log('MyContent render');
//  const handleClick = () => {
//    showModal({ initialSelectedValue: 'B' })
//      .then(({ selectedValue }) => {
//        console.log('selected', selectedValue);
//        setValue(selectedValue);
//      })
//      .catch(() => {
//        console.log('not selected');
//      });
//  };

//  const aaa = "testModalDialog";
//  const bbb = {
//    title: "うまく行った！！",
//    message: "messasge-syz",
//  };
//  const ccc = {...bbb};

//  const valueVote = useVoteStore((state) => state.valueVote);
//  const increase = useVoteStore((state) => state.increase);
//  const decrease = useVoteStore((state) => state.decrease);
//  const setVoteWithNumber = useVoteStore((state) => state.setVoteWithNumber);


//  const DynamicContent = lazy(async () => ({
//    default: (await import(/* @vite-ignore */ `./${aaa}.tsx`)).TestModalDialog
//  }));
//
//      <Suspense fallback="Loading...">
//        <DynamicContent
//          {...bbb}
//        />
//      </Suspense>
//<div>
//<span>Vote for go to theatre: {valueVote}</span>
//<div>
//  <button onClick={() => increase()}>Up!</button><br/>
//  <button onClick={() => decrease()}>Down!</button><br/>
//  <button onClick={() => setVoteWithNumber(20)}>Set votes to 20</button>
//</div>
//</div>

//  const aaa =
//    <>
//      <TestModalDialog
//      />
//    </>

//  return (
//    <div>
//      <p onClick={() => handleClick()}>おーぷん</p>
//      {value ? <p>{value}</p> : null}
//    </div>
//  );
//};

//type MyModalProps<T = ModalOutput> = ModalState<T> & {
//  initialSelectedValue: string;
//};

//const MyModal: React.FC<MyModalProps> = ({
//  show,
//  handleOk,
//  handleCancel,
//  initialSelectedValue: param,
//}) => {
//  const [selectedValue, setSelectedValue] = useState('');

//  useEffect(() => {
//    setSelectedValue(param);
//  }, [param]);

//  return (
//    <>
//      {
//        show ?
//        <div className="fixed inset-0 flex justify-center items-center">
//          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
//          <div className= "relative bg-white mx-auto my-auto p-5 rounded">
//            <h1>もーだる</h1>
//            <br/>
//            <select
//              value={selectedValue}
//              onChange={(e) => setSelectedValue(e.target.value)}
//            >
//              <option value="A">A</option>
//              <option value="B">B</option>
//              <option value="C">C</option>
//            </select>
//            <br/>
//            <p onClick={handleCancel}>きゃんせる</p>
//            <p onClick={() => handleOk({selectedValue: selectedValue})}>せんたく</p>
//          </div>
//        </div>
//        : null
//      }
//    </>
//  );
//};

export default Feature;