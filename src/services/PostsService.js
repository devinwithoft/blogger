
import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from '../services/axiosService.js'
import { logger } from "../utils/Logger.js"
class PostsService {
  async getPosts() {
    const res = await api.get('api/blogs')
    logger.log('[GETTING POSTS]', res.data)
    AppState.posts = res.data.map(p => new Post(p))
  }

  async getPostsByProfileId(profileId) {
    const res = await api.get('api/blogs', { params: { creatorId: profileId } })
    AppState.posts = res.data.map(p => new Post(p))
  }

  async createPost(body) {
    const res = await api.post('api/blogs', body)
    AppState.posts.unshift(res.data)
  }
}

export const postsService = new PostsService()