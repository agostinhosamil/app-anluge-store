'use client'

import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

import { path, range } from '~/utils'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'

const lorem = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Magnam error consectetur exercitationem fugiat omnis 
  eos natus eius molestiae consequatur reprehenderit deleniti
  laborum tempora eum saepe nemo quae, iure ipsam aliquid.
`

export default function HelpCenterHomePage() {
  const subjects = range(20).map(s => ({
    id: s,
    title: `Help center articles (subject ${s})`,
    slag: generateSlagByTitleWithoutSignature(
      `Help center articles (subject ${s})`
    ),
    posts: range(30).map(i => ({
      id: `${s}:${i}`,
      title: `Help center articles (subject ${s}) Post ${i}`,
      slag: generateSlagByTitleWithoutSignature(
        `Help center articles (subject ${s}) Post ${i}`
      ),
      summary: lorem
    }))
  }))

  return (
    <div className="w-full flex flex-col gap-4 items-center dark:bg-zinc-900">
      <div className="w-full flex flex-col gap-5 items-center justify-center px-20 py-32 bg-blue-300 bg-gradient-to-t from-blue-50 to-blue-100 dark:bg-zinc-900 dark:from-zinc-800 dark:to-zinc-950">
        <div className="w-full max-w-3xl flex flex-col gap-5 items-center justify-center">
          <h1 className="font-extrabold text-zinc-900 dark:text-white">
            Central de ajuda
          </h1>
          <p className="text-center text-xl text-zinc-500 dark:text-zinc-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            error consectetur exercitationem fugiat omnis eos natus eius
            molestiae consequatur reprehenderit deleniti laborum tempora eum
            saepe nemo quae, iure ipsam aliquid.
          </p>
          <label
            htmlFor="help-center-search-input"
            className="w-full flex flex-row items-center gap-2 cursor-text p-4 shadow-md bg-zinc-50 dark:bg-zinc-700 rounded-full border-solid border-zinc-200 dark:border-zinc-800 border-[1px]"
          >
            <div className="dark:text-zinc-50">
              <FaSearch />
            </div>
            <div className="w-full inline-flex">
              <input
                type="text"
                name="search[query]"
                autoCapitalize="off"
                autoComplete="off"
                autoFocus={false}
                spellCheck={false}
                autoCorrect="off"
                id="help-center-search-input"
                className="w-full border-0 outline-none bg-transparent dark:text-zinc-50 text-2xl -mt-1 font-semibold"
              />
            </div>
          </label>
        </div>
      </div>
      <div className="w-full max-w-3xl">
        {subjects.map(subject => (
          <div
            className="w-full flex flex-col gap-4 my-5 first:mt-0 last:mb-0"
            key={subject.id}
          >
            <h3 className="font-extrabold text-lg md:text-3xl lg:text-4xl text-center m-auto max-w-xl dark:text-white">
              {subject.title}
            </h3>
            <ul className="w-full flex flex-wrap flex-col lg:flex-row">
              {subject.posts.map(post => (
                <li className="w-full lg:w-1/2 inline-flex" key={post.id}>
                  <Link
                    className="w-full flex p-4 flex-col gap-3 text-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-200 rounded-lg hover:shadow-lg transition-all"
                    href={path('/help', 'articles', post.slag)}
                  >
                    <strong className="text-lg md:text-xl text-zinc-800 dark:text-zinc-50">
                      {post.title}
                    </strong>
                    <p className="text-zinc-400">{post.summary}</p>
                    <i className="text-sm dark:text-zinc-400">Há dois dias</i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
