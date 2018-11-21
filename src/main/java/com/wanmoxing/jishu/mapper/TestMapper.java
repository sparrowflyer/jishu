package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.Test;

@Mapper
public interface TestMapper {
	
	public Test find(int id);

    public void insert(Test test);

    public void update(Test test);
    
    public void delete(int id);
	
}
