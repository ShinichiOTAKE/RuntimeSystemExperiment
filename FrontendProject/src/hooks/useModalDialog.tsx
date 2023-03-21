import React, { ReactNode, useCallback, useState } from "react";
import { testDialogProps, TestDialog } from "@/feature/test/testDialog";

type State = {
  id: string;
  title: string;
  onClose: testDialogProps["onClose"];
};

type OpenModalResult = Parameters<State["onClose"]>[0];

type ReturnParameters = {
  getResult: (props: Omit<State, "onClose">) => Promise<OpenModalResult>;
  render: () => ReactNode;
};

export const useModalDialog = (): ReturnParameters => {
  const [state, setState] = useState<State | undefined>(undefined);

  const getResult: ReturnParameters["getResult"] = useCallback((props) =>
    new Promise((resolve) => {
      setState({ ...props, onClose: resolve});
    }),
    []
  );

  const handleClose: State["onClose"] = useCallback(
    (options) => {
      state?.onClose(options);
      setState(undefined);
    },
    [state]
  );

  const render: ReturnParameters["render"] = () => {
    return (
      <TestDialog 
        open={!!state}
        title={state?.title ?? ""}
        onClose={handleClose}
      />
    );
  }

  return {
    getResult,
    render,
  };
};