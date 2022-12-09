export class Post {
  constructor(data) {
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creator = data.creator
    this.id = data.id
    this.createdAt = new Date(data.createdAt).toLocaleString()
  }
}