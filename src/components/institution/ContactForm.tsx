import { Mail, Phone } from 'lucide-react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa6'

export const ContactForm = () => {
  return (
    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl font-[sans-serif]">
      <div>
        <h1 className="text-gray-800 text-3xl font-extrabold dark:text-white">
          Vamos conversar
        </h1>
        <p className="text-sm text-gray-500 mt-4 dark:text-zinc-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          deleniti id illum illo. Tempore consequuntur dolores autem, accusamus
          consequatur aut necessitatibus ex commodi exercitationem quas sequi
          quos nam nesciunt sed!
        </p>

        <div className="mt-8">
          <h2 className="text-gray-800 text-base font-bold dark:text-zinc-50">
            Email
          </h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Mail />
              </div>
              <a href="#" className="text-zinc-500 text-sm ml-4">
                <small className="block">Email principal</small>
                <strong>inf.geral@anluge.com</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-gray-800 text-base font-bold dark:text-zinc-50">
            Telefone
          </h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Phone />
              </div>
              <a href="#" className="text-zinc-500 text-sm ml-4">
                <small className="block">Telefone</small>
                <strong>+244 945 665 659</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-gray-800 text-base font-bold dark:text-zinc-50">
            Socials
          </h2>

          <ul className="flex mt-4 space-x-4 [&_a]:text-zinc-900 dark:[&_a]:text-zinc-200">
            <li className="bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FaWhatsapp />
              </a>
            </li>
            <li className="bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form className="ml-auto space-y-4 dark:[&_input]:bg-zinc-800 dark:[&_input]:border-zinc-700 dark:[&_input]:text-zinc-50 dark:[&_input]:font-bold dark:[&_textarea]:bg-zinc-800 dark:[&_textarea]:border-zinc-700 dark:[&_textarea]:text-zinc-50 dark:[&_textarea]:font-bold">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent resize-none overflow-hidden"
        ></textarea>
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
        >
          Send
        </button>
      </form>
    </div>
  )
}
