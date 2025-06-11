package com.q.buy.small.user.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.q.buy.small.media.tool.UploadTool;
import com.q.buy.small.product.form.ProductMediaForm;
import com.q.buy.small.product.mappers.ProductMediaMapper;
import com.q.buy.small.product.model.entity.ProductMedia;
import com.q.buy.small.user.mappers.UpUserMapper;
import com.q.buy.small.user.model.entity.UpUser;
import com.q.buy.util.q.QListUtil;
import com.q.buy.util.q.QMediaUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UpUserServiceImpl extends ServiceImpl<UpUserMapper, UpUser> {
}
