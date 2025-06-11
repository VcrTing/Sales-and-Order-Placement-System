package com.q.buy.small.order.tool;

import com.q.buy.small.order.form.OrderAddForm;
import com.q.buy.small.order.model.entity.XOrder;
import com.q.buy.small.order.service.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderAddTool {

    @Autowired
    OrderServiceImpl orderService;

    final Object addLock = new Object();
    // 新增订单
    public XOrder addOrder(OrderAddForm form) {
        synchronized (addLock) {
            XOrder order = form.toXOrder();
            boolean isOK = orderService.save(order);
            if (!isOK) {
                throw new RuntimeException("新增订单失败，请重新提交。");
            }
            return order;
        }
    }
}
