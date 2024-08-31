export type PostListItem = {
  id: string
  title: string
  slag: string
  body: string
  createdAt: Date
  medias: {
    id: string
    fileName: string
  }[]
}

export type PostList = PostListItem[]
