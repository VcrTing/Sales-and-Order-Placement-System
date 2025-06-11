package com.q.buy.small.user.model.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@TableName("up_users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpUser {
    @TableId
    Long id;
    String documentId;
    Date createdAt;

    String username;
    String nickname;
    String phone;
    Integer countryCode;

    String smallAppId;
    String smallAppAvatar;
    String smallAppName;
    String smallAppToken;

    BigDecimal longitude;
    BigDecimal latitude;
    String address;

    Integer isFreezing;
}
