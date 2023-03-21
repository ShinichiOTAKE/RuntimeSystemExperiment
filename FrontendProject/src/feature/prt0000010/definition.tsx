export const keiyakuhColumns = [
  {
    accessorKey: "bs",
    header: "部署"
  },
  {
    accessorKey: "kykb",
    header: "契約区分"
  },
  {
    accessorKey: "urkrstr",
    header: "売上先"
  },
  {
    accessorKey: "srkrstr",
    header: "仕入先"
  },
  {
    accessorKey: "kyutno",
    header: "受付No."
  },
  {
    accessorKey: "hatno",
    header: "発注No."
  }
];

export type listKeiyakuhRequest = {
  bscd: string //部署
  kyutno: string //受付No
  trkflg: boolean //取消契約非表示
  kykb: string //契約区分
  nokist: string //納期開始日
  nokied: string //納期終了日
  urkrcd: string //売上先管理コード
  srkrcd: string //仕入先管理コード
};    

export type listKeiyakuhResponse = {
  bsstr: string,
  kykb: string,
  urkrstr: string,
  srkrstr: string,
  kyutno: string,
  hatno: string
};