package com.wanmoxing.jishu.constant.enums;

import java.util.ArrayList;
import java.util.List;

public enum Country {
	
	ENGLAND("英国"),	
	AUSTRALIA("澳洲"),	
	SINGAPORE("新加坡"),	
	HONGKONG("香港");
	
	private String countryName;
	
	private Country (String countryName) {
		this.countryName = countryName;
	}

	public String getCountryName() {
		return countryName;
	}
	
	public void setType(String countryName) {
		this.countryName = countryName;
	}
	
	private static List<String> countryNames;
	
	static {
		countryNames = new ArrayList<String>();
		for (Country country : Country.values()) {
			countryNames.add(country.getCountryName());
		}
	}
	
	public static List<String> getCountryNames() {
		return countryNames;
	}

}
