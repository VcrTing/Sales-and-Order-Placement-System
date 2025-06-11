package com.q.buy.small.order.model.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@TableName("x_order")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class XOrder {
    @TableId
    String documentId;
    Date createTime;
    Date updateTime;
    String updateBy;
    String createdBy;
    @TableLogic
    Integer deleted;
    Integer version;

    // 配送消息
    BigDecimal longitude;
    BigDecimal latitude;
    String address;
    String phone;
    String name;
    // 0 - 配送类型
    Integer sendType;

    //
    String remark;

    // 订单价格
    BigDecimal price;
    // 配送费
    BigDecimal sendPrice;
    Integer num;

    // 0 - 等待制作， 1 - 制作完成
    Integer makeStatus;
    // 0 - 等待支付， 1 - 支付完成
    Integer payStatus;
    // 0 - 无， 1 - 配送中/已放到自提点， 2 - 配送完成/自提完成
    Integer sendStatus;

    // 各种时间
    Date orderTime;
    Date sendTime;
    Date payTime;
    Date finishTime;

    // 购买产品的详情
    String productsJson;

    // 下单用户
    String userCode;
    String userDocumentId;

    // 对接微信支付的数据
}
