'use client'

import { useEffect, useState } from 'react'

import { arraySplit } from '~/utils'

import { PostPreview } from './PostPreview'
import { PostListItem } from './types'

type PostListProps = {
  posts: Array<PostListItem>
}

type PostListComponent = React.FunctionComponent<PostListProps>

export const PostList: PostListComponent = props => {
  const [colsCount, setColsCount] = useState<number>(2)

  const cols = arraySplit(
    props.posts,
    Math.round(props.posts.length / Math.round(colsCount))
  )

  useEffect(() => {
    const windowResizeHandler = () => {
      const rowsCountByWindowWidthMap = [
        [400, 1],
        [1700, 2],
        [2800, 3],
        [3700, 4],
        [4700, 5]
      ]

      let updatedColsCount = 0

      for (const [
        windowMaxWidth,
        colsCountByWindowWidth
      ] of rowsCountByWindowWidthMap) {
        if (window.innerWidth <= windowMaxWidth) {
          updatedColsCount = colsCountByWindowWidth
          break
        }
      }

      if (updatedColsCount > 0) {
        setColsCount(updatedColsCount)
      }
    }

    window.addEventListener('resize', windowResizeHandler)

    return () => {
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [])

  return (
    <div className="blog-posts-list">
      {cols.map((col, colIndex) => (
        <div
          key={colIndex}
          className="w-full md:w-1/2 my-4 flex flex-col gap-y-1 items-start justify-start"
        >
          {col.map(post => (
            <PostPreview key={post.id} {...post} />
          ))}
        </div>
      ))}
    </div>
  )
}
