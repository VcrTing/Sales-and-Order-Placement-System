package com.q.buy.util.q;


import org.springframework.util.StringUtils;

public final class QVUtil {
    public static boolean notLen(String v) {
        return !StringUtils.hasLength(v);
    }

    public static String serStr(Object src) {
        if (src == null) return "";
        return src.toString();
    }

    public static Integer serInt(Object src, Integer def) {
        if (src == null) return def;
        if (src instanceof String) {
            if (src.equals("")) return def;
        }
        if (src instanceof Boolean) {
            return def;
        }
        try {
            return Integer.parseInt(src.toString());
        }
        catch (Exception e) { }
        return def;
    }
}
