import React, { ReactPortal, Suspense } from "react";
//import { usePortal } from "@/hooks/usePortal";

//import { lazyLoader } from "@/common/lazyLoader";
//import { ModalDialog } from "@/component/ModalDialog";
//import { Spinner } from "@/component/Spinner";

//type Props<I, O> = {
//  featureId: string,
//  dialogId: string,
//  defaultArgument: I,
//  portalId?: string,
//};

//type ToUseModalDialog<I, O> = {
//  showModalDialog: (argument: I) => Promise<O>,
//  modalPortal: ReactPortal
//};

//export const useModalDialog2 = <I, O = void>({
//  featureId,
//  dialogId,
//  defaultArgument,
//  portalId = "default-portal",
//  }: Props<I, O>): ToUseModalDialog<I, O> => {

//    const DialogComponent = getDialogComponent(featureId, dialogId);
//  const DialogComponent = lazyLoader(() => import(`../feature/${featureId}/${dialogId}/index.tsx`));

//  const {modalRender, show} =
//    ModalDialog<I, O>({
//      dialogElement: ({
//        modalState: { handleSelect, handleCancel },
//        modalArgument,
//      }) => {
//        return (
//          <Suspense fallback={Spinner}>
//            <DialogComponent
//              {
//                ...{
//                  handleSelect,
//                  handleCancel,
//                  modalArgument,
//                }
//              }
//            />
//          </Suspense>
//        );
//      },
//      defaultArgument: defaultArgument
//    });

//    const portal = usePortal({
//      portalId: portalId,
//      children: modalRender,
//    });

//    return {
//      showModalDialog: show,
//      modalPortal: portal,
//    };
//};