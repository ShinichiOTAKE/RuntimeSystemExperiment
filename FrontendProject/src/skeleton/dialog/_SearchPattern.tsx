import React, { ReactNode, FC } from "react";
import { BaseDialogLayout } from "@/layout/BaseDialog";

type Props = {
  onClose: () => void;
};

export const SearchPatternBuilder: FC<Props> = ({ onClose }) => {
  return (
    <BaseDialogLayout>
      <header className="bg-white text-xs flex">
        <p>画面ID：1234567890</p>
        <p>23/3/15 11:14</p>
          <button type="button" onClick={onClose}>×</button>
      </header>
      <main className="bg-slate-50">
        <header className="mt-5">
          <h1>テスト</h1>
          <p>テストの詳細</p>
        </header>
        <article>
          <section className="mt-5">
            <h3>テスト検索</h3>
            <div></div>
          </section>
          <section className="mt-5">
            <h3>テスト結果</h3>
            <div></div>
          </section>
        </article>
      </main>
    </BaseDialogLayout>
  );
};