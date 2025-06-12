package com.q.buy.module.order.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.q.buy.module.order.mappers.OrderMapper;
import com.q.buy.module.order.model.entity.XOrder;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, XOrder> {

}
