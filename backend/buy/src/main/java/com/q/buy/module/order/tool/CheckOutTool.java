package com.q.buy.module.order.tool;

import com.q.buy.module.order.form.OrderAddForm;
import com.q.buy.module.order.form.OrderPayForm;
import com.q.buy.module.order.model.entity.XOrder;
import com.q.buy.module.order.service.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class CheckOutTool {

    @Autowired
    OrderServiceImpl orderService;

    final Object addLock = new Object();
    // 新增订单
    public XOrder addOrder(OrderAddForm form) {
        synchronized (addLock) {
            XOrder order = form.toXOrder();
            order.setId(null);
            order.setDocumentId(UUID.randomUUID().toString());
            boolean isOK = orderService.save(order);
            if (!isOK) {
                throw new RuntimeException("新增订单失败，请重新提交。");
            }
            return order;
        }
    }

    // 支付
    public XOrder payment(OrderPayForm form) {
        synchronized (addLock) {


            return null;
        }
    }
}
