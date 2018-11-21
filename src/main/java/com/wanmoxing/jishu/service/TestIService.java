package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.Test;

public interface TestIService {
	
	public Test find(int id);
	
	public void insert(Test user);
	
    public void update(Test user);

    public void delete(int id);

}
