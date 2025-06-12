package com.q.buy.module.order.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderPayForm {
    String id;
    String documentId;
    Integer version;

    Integer num;
    BigDecimal price;

    // 下单用户
    String userCode;
    String userPhone;
    String userDocumentId;

    // 微信支付的东西
}
