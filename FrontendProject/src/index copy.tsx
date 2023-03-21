import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { ModalDialogProvider } from "./common/modalDialogProvider";
//import { ModalWrapper } from "@/common/modalWrapper";

import { BasePageLayout } from "./layout/BaseScreen";
import { NotFound } from "./layout/NotFound";
import { Spinner } from "@/component/Spinner";

import "@/style/style.css";

const LazyLoader = () => {
  const { screenId } = useParams();
  const Component = lazy(() =>
    import(`./feature/${screenId}/index.tsx`)
    .then(({ Biz }) => ({ default: Biz })));

  return(
    <Suspense fallback={Spinner}>
      <Component />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePageLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/:screenId",
        element: <LazyLoader />,
      }
    ],
  },
]);

const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);
  if (root) {
    root.render(
      <>
        <ModalDialogProvider>
          <RouterProvider router={router}/>
        </ModalDialogProvider>
      </>
    );
  };
};

//        <ModalWrapper wrapperId="default-modal" />