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

export default async function HelpCenterHomePage() {
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
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full flex flex-col gap-5 items-center justify-center px-20 py-32 bg-blue-300 bg-gradient-to-t from-blue-50 to-blue-100">
        <div className="w-full max-w-3xl flex flex-col gap-5 items-center justify-center">
          <h1 className="font-extrabold text-zinc-900">Central de ajuda</h1>
          <p className="text-center text-xl text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            error consectetur exercitationem fugiat omnis eos natus eius
            molestiae consequatur reprehenderit deleniti laborum tempora eum
            saepe nemo quae, iure ipsam aliquid.
          </p>
          <label
            htmlFor="help-center-search-input"
            className="w-full flex flex-row items-center gap-2 cursor-text p-4 shadow-md bg-white rounded-full border-solid border-zinc-200 border-[1px]"
          >
            <div>
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
                className="w-full border-0 outline-none bg-transparent text-2xl -mt-1 font-semibold"
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
            <h3 className="font-extrabold text-lg md:text-3xl lg:text-4xl text-center m-auto max-w-xl">
              {subject.title}
            </h3>
            <ul className="w-full flex flex-wrap flex-col lg:flex-row">
              {subject.posts.map(post => (
                <li className="w-full lg:w-1/2 inline-flex" key={post.id}>
                  <Link
                    className="w-full flex p-4 flex-col gap-3 text-zinc-800 hover:bg-zinc-100 active:bg-zinc-200 rounded-lg hover:shadow-lg transition-all"
                    href={path('/help', 'articles', post.slag)}
                  >
                    <strong className="text-lg md:text-xl text-zinc-800">
                      {post.title}
                    </strong>
                    <p className="text-zinc-400">{post.summary}</p>
                    <i>Há dois dias</i>
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
