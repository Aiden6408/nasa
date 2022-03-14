import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { nasaimages } from "./AxiosService"

const baseQuery = {
    api_key: 'a6CMyegAkfFx9kv405QH3Dm6LwW0Or4AvXIwapva',
    query: ''
}


class DailyImageService {
    async search(searchterm) {
        baseQuery.query = searchterm
        const res = await nasaimages.get('', { params: baseQuery })
        let images = res.data.images
        AppState.dailyimages = images
        logger.log(res.data)
    }
}

export const dailyImageService = new DailyImageService()