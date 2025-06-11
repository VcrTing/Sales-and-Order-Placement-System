namespace Page {
    interface IndexPageStore {
        city: Conf.City
        ioading: number

        index_datas: Page.IndexDatas
    }

    interface PublishPageStore {
        num: number
    }
}