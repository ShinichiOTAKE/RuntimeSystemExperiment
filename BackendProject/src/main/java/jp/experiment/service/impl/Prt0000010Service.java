package jp.experiment.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jp.experiment.dto.request.RequestDto;
import jp.experiment.dto.response.impl.Prt0000010ResponseDto;
import jp.experiment.entity.KeiyakuhEntity;
import jp.experiment.repository.KeiyakuhRepository;
import jp.experiment.service.BusinessScreenService;

@Service("Prt0000010Service")
public class Prt0000010Service implements BusinessScreenService {

	private KeiyakuhRepository keiyakuhRepository;

	public Prt0000010Service (KeiyakuhRepository keiyakuhRepository) {

		this.keiyakuhRepository = keiyakuhRepository;

	}

	public List<Prt0000010ResponseDto> base_onLoad(RequestDto request) {

		List<KeiyakuhEntity> entities = keiyakuhRepository.findByRequest(request);

		var results = new ArrayList<Prt0000010ResponseDto>();

		for (KeiyakuhEntity entity: entities) {

			var result = new Prt0000010ResponseDto();

			result.setKyutno(entity.getKyutno());
			result.setBs(entity.getBscd() + "|" + entity.getBsbsjn());
			result.setKykb(entity.getKykb());
			result.setUrkrstr(entity.getUrkrcd() + "|" + entity.getUrsekz());
			result.setSrkrstr(entity.getSrkrcd() + "|" + entity.getSrsekz());
			result.setHatno(entity.getHatno());
			results.add(result);
		}

		return results;
	}

}