import React, { useState, useEffect, useContext } from "react";
import { useReactTable, getCoreRowModel ,getPaginationRowModel, getSortedRowModel, SortingState} from "@tanstack/react-table";
import { SearchPatternBuilder } from "@/skeleton/screen/SearchScreen";
import { Dialog } from "@/feature/prt0000010/dialog1";
import { NewRegist } from "@/feature/prt0000010/dialog2/index";
import { ModalDialogContext } from "@/common/modalDialogProvider";
import * as constant from "@/constant";
import { OkyButton, OkyTextbox } from "@/component";
import * as restFacade from "@/api/restFacade";
import { TableBuilder } from "@/common/tableUtility";
import * as definitions from "./definition";



const featureId: string = "prt0000010";

const Feature = () => {

  const [keiyakuhEntities, setJnwmbsEntities] =
    useState<definitions.listKeiyakuhResponse[]>([]);

  //各検索項目のuseState定義
  const [sch_bscd, setSch_bscd] = useState("");
  const [sch_kyutno, setSch_kyutno] = useState("");
  const [sch_kykb, setSch_kykb] = useState("");
  const [sch_nokist, setSch_nokist] = useState("");
  const [sch_nokied, setSch_nokied] = useState("");
  const [sch_urkrcd, setSch_urkrcd] = useState("");
  const [sch_srkrcd, setSch_srkrcd] = useState("");

  //検索リクエストセット
  const requestParam = () => {
    const req: definitions.listKeiyakuhRequest = {
      bscd: sch_bscd,
      kyutno: "",
      trkflg: false,
      kykb: "",
      nokist: "",
      nokied: "",
      urkrcd: "",
      srkrcd: ""
    }
    return req
  };
  //テーブル作成
  const [sorting, setSorting] = React.useState<SortingState>([])
  const keiyakuhTable = useReactTable({
    data: keiyakuhEntities,
    columns: definitions.keiyakuhColumns,
    state: {
			sorting,
		},
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  //検索実行
  const search = () => {
    restFacade.interpretPostWithGet(
      constant.accessTo.businessScreenApi(featureId, "base", "onLoad"),
      requestParam(),
      setJnwmbsEntities)
  }

  const clear = () => {
  }

  const { open, close }= useContext(ModalDialogContext);

  const handleOpen = () => {
    open(<Dialog onClose={close}/>);
  };
  const newRegistOpen = () => {
    open(<NewRegist onClose={close}/>);
  };


  //スケルトン格納
  const headLabelData = {
    screenTitle: "契約検索",
    screenDetail: "処理を行う契約を検索します。",
  };

  const ButtonAreaElement =
    <div>
      <OkyButton color="green" wsize="md" hsize="lg" disabled={false} onClick={newRegistOpen}>契約新規作成</OkyButton>
    </div>
    ;

  const SearchAreaElement =
    <>
      <h2>検索条件</h2>
      <div className="search-cond">
        <div className="">
          <div className="flex">
            <div>
              <label className="block" htmlFor="bscd">部署</label>
              <OkyTextbox id="bscd" wsize="xs" value={sch_bscd} onChange={(event) => setSch_bscd(event.target.value)} />
              <OkyTextbox id="bsnm" wsize="xl" />
            </div>
            <div>
              <label className="block" htmlFor="kyutno">受付No</label>
              <OkyTextbox id="kyutno" wsize="lg" value={sch_kyutno} onChange={(event) => setSch_kyutno(event.target.value)} />
            </div>
            <div>
              <label className="block" htmlFor="trkflg">表示</label>
              <input id="trkflg" type="checkbox" /><span>取消契約非表示</span>
            </div>
          </div>
          <div className="flex">
            <div>
              <label className="block">契約区分</label>
              <select value={sch_kykb} onChange={(event) => setSch_kykb(event.target.value)}>
                <option value={""} >選択してください</option>
                <option value={"1"}>売買契約</option>
                <option value={"2"}>買契約</option>
                <option value={"3"}>売契約</option>
                <option value={"4"}>マスタ</option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="nokist">納期</label>
              <OkyTextbox id="nokist" wsize="sm" value={sch_nokist} onChange={(event) => setSch_nokist(event.target.value)} />～
              <OkyTextbox id="nokied" wsize="sm" value={sch_nokied} onChange={(event) => setSch_nokied(event.target.value)} />
            </div>
            <div>
              <label className="block" htmlFor="urkrcd">売上先</label>
              <OkyTextbox id="urkrcd" wsize="sm" value={sch_urkrcd} onChange={(event) => setSch_urkrcd(event.target.value)} />
              <OkyTextbox wsize="xl" />
              <OkyButton color="gray" wsize="sm" hsize="sm" onClick={handleOpen}>選択</OkyButton>
            </div>
            <div>
              <label className="block" htmlFor="srkrcd">仕入先</label>
              <OkyTextbox id="srkrcd" wsize="sm" value={sch_srkrcd} onChange={(event) => setSch_srkrcd(event.target.value)} />
              <OkyTextbox wsize="xl" />
              <OkyButton color="gray" wsize="sm" hsize="sm" onClick={handleOpen}>選択</OkyButton>
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
      table={keiyakuhTable}
    />
    
    ;

  return (
    <SearchPatternBuilder
      screenTitle={headLabelData.screenTitle}
      screenDetail={headLabelData.screenDetail}
      buttonArea={ButtonAreaElement}
      searchArea={SearchAreaElement}
      resultTable={ResultTableElement}
    />
  );
};

export default Feature;