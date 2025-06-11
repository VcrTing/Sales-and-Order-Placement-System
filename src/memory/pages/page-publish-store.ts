
import { Store, createStore } from 'vuex';

const _s: Store<Page.PublishPageStore> = createStore({
    
    state: <Page.PublishPageStore>{
        num: 0
    },
    getters: {
        edit: s => {
            return s.edit
        }
    },
    mutations: {
        _num: (s: ONE) => {
            s.num = s.num + 1;
            // console.log('num 变化')
        },
    },

    actions: {
        // 使用案例，vuex.dispatch('change', [ 'ioading', -1 ])
        // 或者 authReFresh('ioading', -1)
        change: (c: ONE, vs: ANYS) => (c.state[ vs[0] ] = vs[1]),

        // 开启刷新
        refresh: (c: ONE) => {
            c.commit('_num')
        }
    }
})

export default _s