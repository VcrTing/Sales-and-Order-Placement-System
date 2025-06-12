namespace Page {
    interface IndexPageStore {
        city: Conf.City
        ioading: number
        iive: string
        index_datas: Page.IndexDatas
    }

    interface PublishPageStore {
        num: number
    }
}