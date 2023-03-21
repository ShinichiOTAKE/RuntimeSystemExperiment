export const fmmtrkhpColumns = [
  {
    accessorKey: "trcdcd",
    header: "名称"
  },
  {
    accessorKey: "trkrcd",
    header: "カナ"
  },
  {
    accessorKey: "trsekz",
    header: "番号"
  },
  {
    accessorKey: "trsemecn",
    header: "略号"
  },
  {
    accessorKey: "trrkej",
    header: "タイプ"
  },
  {
    accessorKey: "snursk",
    header: "社内売上先"
  }
];

export type listFmmtrkhpRequest = {
  srhTrskbbkb: string //取引先区分
  srhMtkb: string //検索方法
  srhMachkb: string //マッチタイプ
  srhWord: string //検索ワード
};

export type listFmmtrkhpResponse = {
  trrkkz: string //名称
  trsemecn: string //カナ
  trkrcd: string //番号
  trrg: string //略号
  trskbbkb: string //タイプ
  snurkrcd: string //社内売上先
};