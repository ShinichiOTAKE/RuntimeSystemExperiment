package jp.experiment.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import jp.experiment.dto.request.RequestDto;
import jp.experiment.entity.KeiyakuhEntity;

@Repository
public class KeiyakuhRepository {

	private final String FIND_ALL_SQL =
		        	"SELECT BSCD"
		        	+ ", KYKB"
		        	+ ", URKRCD"
		        	+ ", SRKRCD"
		        	+ ", KYUTNO"
		        	+ ", HATNO"
		        	+ " FROM KEIYAKUH"
		        	+ " WHERE BSCD = :bscd";

	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;

	public List<KeiyakuhEntity> findByRequest(RequestDto request) {

		return jdbcTemplate.query(FIND_ALL_SQL,
				new BeanPropertySqlParameterSource(request),
				new BeanPropertyRowMapper<KeiyakuhEntity>(KeiyakuhEntity.class));

	}
}