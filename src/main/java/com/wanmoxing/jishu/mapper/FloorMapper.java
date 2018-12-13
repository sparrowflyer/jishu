package com.wanmoxing.jishu.mapper;


import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.wanmoxing.jishu.bean.Floor;

@Mapper
public interface FloorMapper {
	
	public List<Floor> getFloorList();
		
    public void insert(Floor floor);

    public void update(Floor floor);
    
    public void delete(int fid);
	
}
