package jp.experiment.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import jp.experiment.dto.request.InvokeEventDto;
import jp.experiment.dto.request.impl.Prt0000010RequestDto;
import jp.experiment.dto.response.impl.Prt0000010ResponseDto;
import jp.experiment.service.BusinessScreenProxy;

@RestController
@RequestMapping("/v1/screens/{screenId}/{elementId}/{eventName}")
public class BusinessScreenCommonController {

	private BusinessScreenProxy proxy;

	public BusinessScreenCommonController(BusinessScreenProxy proxy) {
		this.proxy = proxy;
	}

	@PostMapping(headers = {"X-HTTP-Method-Override=GET"})
	@ResponseBody
	public List<Prt0000010ResponseDto> GetRequestHandle(InvokeEventDto event, @RequestBody final Prt0000010RequestDto request) throws Throwable {
		System.out.println("aaa");
		
		return (List<Prt0000010ResponseDto>) this.proxy.excute(event, request);
	}
}