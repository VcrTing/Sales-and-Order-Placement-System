package com.q.buy.small.order.mappers;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.q.buy.small.order.model.entity.XOrder;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderMapper extends BaseMapper<XOrder> {

}
