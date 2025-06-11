
const build = (title?: string): Product => {
    return <Product>{
        title: title ? title : '抹茶奶茶',
        introduction: '非常好喝的奶茶，抹茶味',
        media: <MANY>[
            { url: '' }
        ],
        price: 16.2,
    }
}

export default {
    DATAS: [
        <Category>{
            name: '⭐⭐夏季冰爽奶茶',
            documentId: '1',
            products: <Products>[
                build(),
                build('8元糖水'),
                build('网红灌灌椰奶'),
                build('西瓜奶茶'),
                build('香蕉奶茶'),
                build('葡萄奶茶'),
                build('椰子'),
            ]
        },
        <Category>{
            name: '小吃',
            documentId: '2',
            products: <Products>[
                build(),
                build('8元糖水'),
                build('网红灌灌椰奶'),
                build('西瓜奶茶'),
                build('香蕉奶茶'),
                build('葡萄奶茶'),
                build('椰子'),
            ]
        }
    ]
}