package com.q.buy.small.auth.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.q.buy.small.auth.mappers.XUserMapper;
import com.q.buy.small.auth.model.entity.XUser;
import com.q.buy.small.auth.param.info.XUserInfoWxParam;
import com.q.buy.util.q.QListUtil;
import com.q.buy.util.q.QVUtil;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class XUserServiceImpl extends ServiceImpl<XUserMapper, XUser> {

    public List<XUser> phone(String phone) {
        LambdaQueryWrapper<XUser> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(XUser::getPhone, phone);
        wrapper.orderByAsc(XUser::getUpdatedAt);
        return this.list(wrapper);
    }

    // register user
    public XUser registerUser(
            String code, String phone, Integer countryCode, String openId
    ) {
        List<XUser> userList = phone(phone);
        if (QListUtil.isNiceList(userList)) {
            //
            for (XUser user : userList) {
                user.setUpdatedAt(new Date());
                user.setSmallAppAuthCode(code);
                user.setSmallAppOpenId(openId);
            }
            return userList.get(0);
        }
        else {
            XUser user = new XUser();
            user.setPhone(phone);
            user.setCountryCode(countryCode);
            user.setDocumentId(UUID.randomUUID().toString());
            user.setSmallAppOpenId(openId);
            user.setSmallAppAuthCode(code);
            user.setCreatedAt(new Date());
            user.setUpdatedAt(new Date());
            user.setIsFreezing(0);
            if (!this.save(user)) {
                this.save(user);
            }
            return user;
        }
    }

    // 注册或改动用户数据
    public XUser saveOrUpdate(XUserInfoWxParam xUserInfoWxParam) {
        List<XUser> oldList = phone(xUserInfoWxParam.getPhone());
        XUser user = xUserInfoWxParam.toEntity(QListUtil.first(oldList));
        if (QVUtil.notLen(user.getDocumentId())) {
            // 新增
            user.setCreatedAt(new Date());
            user.setIsFreezing(0);
            user.setId(null);
            user.setDocumentId(UUID.randomUUID().toString());
            this.save(user);
        }
        else {
            // 修改
            this.updateById(user);
        }
        return user;
    }

    // 微信获取用户数据
    public XUser hasUser(XUserInfoWxParam param) {
        List<XUser> userList = this.phone(param.getPhone());
        if (QListUtil.isBadList(userList)) {
            return null;
        }
        return userList.get(0);
    }

}
