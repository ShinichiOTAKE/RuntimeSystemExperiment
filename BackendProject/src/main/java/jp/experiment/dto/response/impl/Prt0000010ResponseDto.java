package jp.experiment.dto.response.impl;

import jp.experiment.dto.response.TransformableJson;
import lombok.Data;

@Data
public class Prt0000010ResponseDto implements TransformableJson {
	//契約受付No
	private String kyutno;
	//部署コード
	private String bs;
	//契約区分
	private String kykb;
	//売上先
	private String urkrstr;
	//仕入先管理コード
	private String srkrstr;
	//発注NO
	private String hatno;

}