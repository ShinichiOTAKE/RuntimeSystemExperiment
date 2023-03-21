import React, { ReactNode, FC } from "react";
import { BaseDialogLayout } from "@/layout/BaseDialog";

type Props = {
  screenTitle: String,
  screenDetail: String,
  searchArea: React.ReactNode,
  resultTable: React.ReactNode,
  buttonArea: React.ReactNode,
  onClose: () => void;
};

export const DialogSelectionBuilder: FC<Props> = ({screenTitle,screenDetail,searchArea,resultTable,buttonArea, onClose }) => {
  return (
    <BaseDialogLayout>
      <header className="bg-white text-xs flex">
        <p>画面ID：1234567890</p>
        <p>23/3/15 11:14</p>
          <button type="button" onClick={onClose}>×</button>
      </header>
      <main className="bg-slate-50">
        <header className="mt-5">
          <h1>{screenTitle}</h1>
          <p>{screenDetail}</p>
        </header>
        <article>
          <section className="mt-5">
            <div>{searchArea}</div>
          </section>
          <section className="mt-5">
            <div>{resultTable}</div>
          </section>
        </article>
        <footer>
          {buttonArea}
        </footer>
      </main>
    </BaseDialogLayout>
  );
};