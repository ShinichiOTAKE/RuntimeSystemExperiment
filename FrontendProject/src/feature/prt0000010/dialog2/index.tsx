import React, { useState, useEffect, useContext } from "react";
import { DialogSelectionBuilder } from "@/skeleton/dialog/SelectionDialog";
import * as constant from "@/constant";
import { OkyButton } from "@/component";
import * as restFacade from "@/api/restFacade";
import * as definitions from "./definition";

const screenId: string = "prt0000010d2";
type dialogProps = {
  onClose: () => void;
};
export const NewRegist = (props: dialogProps) => {

  //各検索項目のuseState定義
  const [kykb, setKykb] = useState("");
  const [tpkb, setTpkb] = useState("");

  //検索リクエストセット
  const requestParam = () => {
    const req: definitions.newContractRequest = {
      kykb: kykb,
      tpkb: tpkb,
    }
    return req
  };

  //検索実行
  const submit = () => {
    //restFacade.interpretPostWithGet(
    //  constant.accessTo.businessScreenApi(screenId, "base", "onLoad"),
    //  requestParam(),
    props.onClose
  }
  const cancel = () => {
    close
  }

  //スケルトン格納
  const headLabelData = {
    screenTitle: "新規作成",
    screenDetail: "作成する契約区分や参照入力先を選択します。",
  };

  const SearchAreaElement =
    <>
      <h2>STEP1 新規作成または参照作成を選択</h2>
      <div className="search-cond">
        <div>
          <label className="block" htmlFor="">作成区分</label>
          <input type="radio" value="new"></input>新規作成
          <input type="radio" value="ref"></input>参照作成
        </div>
      </div>
      <h2>STEP2 呼び出し区分を選択</h2>
      <div className="search-cond">
        <div>
          <label className="block" htmlFor="">契約区分</label>
          <select value={kykb} onChange={(event) => setKykb(event.target.value)}>
            <option value={""} >選択してください</option>
            <option value={"1"}>売買契約</option>
            <option value={"2"}>買契約</option>
            <option value={"3"}>売契約</option>
            <option value={"4"}>マスタ</option>
          </select>
        </div>
        <div>
          <label className="block" htmlFor="">タイプ</label>
          <select value={tpkb} onChange={(event) => setTpkb(event.target.value)}>
            <option value={""} >選択してください</option>
            <option value={"1"}>標準</option>
            <option value={"2"}>簡易</option>
          </select>
        </div>
      </div>
    </>
    ;

  const ResultTableElement =
    <></>
    ;
  const ButtonArea = <div className="flex justify-end">
    <OkyButton color="gray" wsize="md" hsize="md" onClick={cancel}>
      キャンセル
    </OkyButton>
    <OkyButton color="green" wsize="md" hsize="md" onClick={submit}>
      反映
    </OkyButton>
  </div>
    ;

  return (
    <DialogSelectionBuilder
      screenTitle={headLabelData.screenTitle}
      screenDetail={headLabelData.screenDetail}
      searchArea={SearchAreaElement}
      resultTable={ResultTableElement}
      buttonArea={ButtonArea}
      onClose={props.onClose}
    />
  );
};