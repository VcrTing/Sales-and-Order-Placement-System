package com.q.buy.module.order.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.q.buy.module.order.mappers.OrderMapper;
import com.q.buy.module.order.model.entity.XOrder;
import com.q.buy.util.q.QListUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, XOrder> {

    public XOrder getByDocumentId(String documentId) {
        LambdaQueryWrapper<XOrder> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(XOrder::getDocumentId, documentId);
        List<XOrder> list = list(wrapper);
        return QListUtil.first(list);
    }
}
