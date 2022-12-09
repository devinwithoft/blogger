import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    logger.log(res.data)
    AppState.activeProfile = new Account(res.data)
  }

}

export const profilesService = new ProfilesService()