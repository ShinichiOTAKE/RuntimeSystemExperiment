import React, { FC } from "react";
import { BaseDialogLayout } from "@/layout/BaseDialog";

type Props = {
  screenTitle: String,
  screenDetail: String,
  searchArea: React.ReactNode,
  resultTable: React.ReactNode,
  onClose: () => void;
};

export const DialogSearchBuilder: FC<Props> = ({screenTitle,screenDetail,searchArea,resultTable, onClose }) => {
  return (
    <BaseDialogLayout>
      <header className="bg-white text-xs flex justify-between">
        <div>
        <span>画面ID：1234567890</span><span>23/3/15 11:14</span>
        </div>
        <div><button type="button" onClick={onClose}>×</button>
        </div>
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
      </main>
    </BaseDialogLayout>
  );
};