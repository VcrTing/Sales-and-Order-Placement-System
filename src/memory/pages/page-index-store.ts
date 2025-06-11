
import mock_products from '@/server/mocks/products/mock_products';
import serv_category from '@/server/products/serv_category';
import net_tool from '@/tool/http/net_tool';
import { arrsort } from '@/tool/util/iodash';
import { is_nice_arr, must_one } from '@/tool/util/valued';
import { Store, createStore } from 'vuex';

const _s: Store<Page.IndexPageStore> = createStore({
    
    state: <ONE> {
        city: <Conf.City>{ },

        ioading: 0,
        index_datas: <Page.IndexDatas>[ ]
    },
    getters: {
        
    },
    mutations: {
        change: (s: ONE, v: ANYS) => s[ v[0] ] = v[1],
        __ioading: (s: ONE, v: number) => s.ioading = v,
        __refresh_index_pager: (s: ONE, v: Pager) => {
            s.index_pager = v;
            // 存本地
        },
        // 更新 首页 活动
        __refresh_index_activities: (s: ONE, v: ONE[]) => {
            // 存本地
        },
        // 加载 首页 分页
        __ioad_index_pager: (s: ONE) => {
            let src: Pager = must_one(s.index_pager)
            const n: number | undefined = src.page
            // 没有，取一个默认
            if (!n) {
                // 先去 本地 取
                // 
                // 拿默认
                src = net_tool.generate_pagination()
            }
            return src
        },
    },
    actions: {
        change: (c: ONE, v: ANYS) => c.state[ v[0] ] = v[1],

        iog: (c: ONE) => {
            console.log(c.state.index_datas)
        },
        // 提前刷新 首页 TAGS
        ioad_category: async (c: ONE) => {
            c.commit('__ioading', 1)
            const origins: ONE[] = c.state.index_datas || [ ]
            if (is_nice_arr(origins)) {
                console.log('无需刷新首页 C')
            }
            else {
                const src: Category[] = arrsort(await serv_category.index(), 'sort', true)
                console.log('刷新首页 C =', src)
                c.commit('change', [ 'index_datas', src ])
            }
            c.commit('__ioading', 0)
        },

        /*
        // 获取 首页 推荐的 活动
        get_index_activities: async (c: ONE) => {
            const s = c.state
            c.commit('__ioad_index_pager')
            const n: ONE[] = s.index_activities
            if (is_nice_arr(n)) {
                // 返回
                return n
            }
            else {
                let src: ONE[] = [ ]
                // 需要获取
                //
                // 先从本地缓存 获取
                //
                // 从网络获取
                const pager: Pager = must_one(s.index_pager)
                src = [] // await server_activity.index_recommond({ }, pager)
                // 更新
                c.commit('__refresh_index_activities', src)
                // 返回
                return src
            }
        }
        */
    }
})

export default _s