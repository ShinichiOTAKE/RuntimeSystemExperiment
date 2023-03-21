package jp.experiment.entity;
import lombok.Data;

@Data
public class KeiyakuhEntity {
	//契約受付No
	private String kyutno;
	//部署コード
	private String bscd;
	//部署正式名称
	private String bsbsjn;
	//契約区分
	private String kykb;
	//売上先管理コード
	private String urkrcd;
	//売上先正式名称
	private String ursekz;
	//仕入先管理コード
	private String srkrcd;
	//仕入先正式名称
	private String srsekz;
	//発注NO
	private String hatno;
}