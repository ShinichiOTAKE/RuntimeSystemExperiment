import React, { useCallback } from "react";
import { OkyButton } from "@/component";

export type testDialogProps = {
  open: boolean;
  title: string;
  onClose: (parameters: any) => void;
};

export const TestDialog: React.FC<testDialogProps> = ({open, title, onClose}) => {
  const handleAaa = useCallback(() => {
    onClose("aaa");
  }, [onClose]);

  const handleBbb = useCallback(() => {
    onClose("bbb");
  }, [onClose]);

  return (
    open ?
      <>
        <h1>ダイアログ</h1>
        <h2>{title}</h2>
        <ul>
          <li>
            <OkyButton color="green" wsize="md" hsize="md" onClick={handleAaa}>
              true
            </OkyButton>
          </li>
          <li>
            <OkyButton color="gray" wsize="md" hsize="md" onClick={handleBbb}>
              false
            </OkyButton>
          </li>
        </ul>
      </>
    : null
  );
};