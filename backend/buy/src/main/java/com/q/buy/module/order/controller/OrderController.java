package com.q.buy.module.order.controller;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.q.buy.conf.NetConfig;
import com.q.buy.framework.result.HResult;
import com.q.buy.module.order.param.OrderQueryParam;
import com.q.buy.module.order.model.entity.XOrder;
import com.q.buy.module.order.service.OrderServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(NetConfig.API_LINK + "orders")
public class OrderController {

    @Autowired
    OrderServiceImpl orderService;

    @GetMapping()
    public HResult<IPage<XOrder>> get(OrderQueryParam param) {
        param.checkPager();
        IPage<XOrder> o = orderService.page(new Page<>(0, 1), param.wrapper());
        return HResult.ok( o );
    }

}
