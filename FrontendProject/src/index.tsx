import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

import { lazyLoader } from "@/common/lazyLoader";
import { ModalDialogProvider } from "@/common/modalDialogProvider";

import { BaseScreenLayout } from "./layout/BaseScreen";
import { NotFound } from "@/layout/NotFound";
import { Spinner } from "@/component/Spinner";

import "@/style/style.css";

import { WithPromiseModal } from "@/component/withPromiseModal";
import ConfirmModal from "@/feature/test/confirmModel";
//import { ConfirmParam, ConfirmContext } from '@/store/context';
import { useModalStore } from "@/store/modal";
import { ModalInput, ModalOutput } from "@/feature/test/definition";

const BusinessScreen = () => {
  
  const { featureId } = useParams();
//  const Component = lazy(async () =>
//    import(`./feature/${screenId}/index.tsx`)
//    .then(({ Biz }) => ({ default: Biz })));
//  const Component = lazy(async () => ({
//    default: (await import(`./feature/${screenId}/index.tsx`)).Biz
//  }));

  const Component = lazyLoader(() => import(`./feature/${featureId}/index.tsx`));

  return(
    <Suspense fallback={Spinner}>
      <Component />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseScreenLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/:featureId",
        element: <BusinessScreen />,
      }
    ],
  },
]);

const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);
  if (root) {
    root.render(
//        <WithPromiseModal<ModalInput, ModalOutput>
//          initialParam={{ title: '', message: '', test: '' }} // モーダルオープンしていない場合のshowModalParam
//          initialParam={{initialSelectedValue: "initialSelect!!"}}
//          // モーダルの状態が変わる度に呼ばれる。モーダルをrenderする。
//          renderModal={({
//            modalState: { show, handleOk, handleCancel }, // モーダルの状態
//            modalState: { handleOk, handleCancel }, // モーダルの状態
//            // モーダルオープン関数のパラメータ(Contextからの型推論が効く)
//            showModalParam: { title, message, test }, 
//            showModalParam="showModalArgument"
//          }) => {
//            return (
//              <ConfirmModal
//                show={show}
//                handleOk={handleOk}
//                handleCancel={handleCancel}
//                initialSelectedValue={{initialSelectedValue: "callValue"}}
//                title={title}
//                message={message}
//                test={test}
//              />
//            );
//          }}
//          context={ConfirmContext} // モーダルオープン関数をこのコンテキストでプロバイドする
//        >
//        </WithPromiseModal>
      <React.StrictMode>
        <ModalDialogProvider
          dialogElement={({
            modalState: { handleSelect, handleCancel }

          })}
          <RouterProvider router={router}/>
        </ModalDialogProvider>
      </React.StrictMode>
    );
  };
};