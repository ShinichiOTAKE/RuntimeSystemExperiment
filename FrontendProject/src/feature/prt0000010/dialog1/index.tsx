import React, { useState, useEffect, useContext } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { DialogSearchBuilder } from "@/skeleton/dialog/SearchDialog";
import * as constant from "@/constant";
import { OkyButton, OkyTextbox } from "@/component";
import * as restFacade from "@/api/restFacade";
import { TableBuilder } from "@/common/tableUtility";
import * as definitions from "./definition";

const dialogId: string = "prt0000010d1";
type dialogProps = {
  onClose: () => void;
};
export const Dialog = (props: dialogProps) => {

  const [fmmtrkhpEntities, setFmmtrkhpEntities] =
    useState<definitions.listFmmtrkhpResponse[]>([]);

  //各検索項目のuseState定義
  const [sch_bscd, setSch_bscd] = useState("");
  const [sch_kyutno, setSch_kyutno] = useState("");

  //検索リクエストセット
  const requestParam = () => {
    const req: definitions.listFmmtrkhpRequest = {
      srhTrskbbkb: "",
      srhMtkb: "",
      srhMachkb: "",
      srhWord: "",
    }
    return req
  };

  const fmmtrkhpTable = useReactTable({
    data: fmmtrkhpEntities,
    columns: definitions.fmmtrkhpColumns,
    getCoreRowModel: getCoreRowModel()
  });

  //検索実行
  const search = () => {
    restFacade.interpretPostWithGet(
      constant.accessTo.businessScreenApi(dialogId, "base", "onLoad"),
      requestParam(),
      setFmmtrkhpEntities)
  }
  const clear = () => {
  }

  //スケルトン格納
  const headLabelData = {
    screenTitle: "取引先検索",
    screenDetail: "取引先を検索します。該当の取引先を選択すると入力フォームに反映します。",
  };

  const SearchAreaElement =
    <>
      <h2>検索条件</h2>
      <div className="search-cond">
        <div>
          <div className="flex justify-between">
            <div>
            <label className="block" htmlFor="">取引先区分</label>
              <input type="radio" value="uri"></input>売上先<br/>
              <input type="radio" value="ire"></input>仕入先
            </div>
            <div>
            <label className="block" htmlFor="">検索方法</label>
              <input type="radio" value="mei"></input>名称<br/>
              <input type="radio" value="kn"></input>カナ<br/>
              <input type="radio" value="bg"></input>番号<br/>
              <input type="radio" value="rk"></input>略号
            </div>
            <div>
              <label className="block" htmlFor="bscd">マッチタイプ</label>
              <input type="radio" value="mei"></input>検索ワードを含む<br/>
              <input type="radio" value="kn"></input>検索ワードで始まる<br/>
              <input type="radio" value="bg"></input>検索ワードで終わる<br/>
              <input type="radio" value="rk"></input>検索ワードと一致する
            </div>
            <div>
              <label className="block" htmlFor="kyutno">検索ワード</label>
              <OkyTextbox id="word" wsize="xl" value={sch_kyutno} onChange={(event) => setSch_kyutno(event.target.value)} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <OkyButton color="gray" wsize="md" hsize="md" onClick={clear}>
            条件をクリア
          </OkyButton>
          <OkyButton color="green" wsize="md" hsize="md" onClick={search}>
            検索
          </OkyButton>
        </div>
      </div>
    </>
    ;

  const ResultTableElement =
    <TableBuilder
      table={fmmtrkhpTable}
    />
    ;

  return (
    <DialogSearchBuilder
      screenTitle={headLabelData.screenTitle}
      screenDetail={headLabelData.screenDetail}
      searchArea={SearchAreaElement}
      resultTable={ResultTableElement}
      onClose={props.onClose}      
    />
  );
};