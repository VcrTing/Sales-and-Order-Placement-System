import { pagePublishDispatch } from "@/memory/page"
import { future } from "../util/future"
import { storage } from "../web/storage"
import uniRouter from "./uni-router"

export default {
    index: () => {
        uniRouter.navigatorpg('index')
    },
    
}