import { prisma } from '~/services/prisma'
import { PostList } from './PostList'

export const BlogSection = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      body: true,
      slag: true,
      createdAt: true,
      medias: {
        take: 1,

        select: {
          id: true,
          fileName: true
        }
      }
    },

    take: 6
  })

  if (posts.length < 1) {
    return null
  }

  // range(12).map(post => ({
  //   id: String(post),
  //   title: String('Lorem ipsum dolor ').repeat(post),
  //   summary: String(
  //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus praesentium repellendus excepturi quibusdam, culpa cum corporis ad explicabo optio voluptatum ducimus, omnis exercitationem itaque libero ipsa adipisci consequatur, minus tenetur.'
  //   )
  // }))

  return (
    <section className="blog-section">
      <div className="section-body">
        <div className="blog-section-content">
          <div className="section-title-container">
            <i>Blog</i>
            <h1>
              Últimos artigos, notícias e <b>destaques</b>
            </h1>
          </div>
          <PostList posts={posts} />
        </div>
      </div>
    </section>
  )
}
