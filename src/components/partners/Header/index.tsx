import Image from 'next/image'
import { Fragment } from 'react'
import {
  FaArrowRight,
  FaBarsStaggered,
  FaHouse,
  FaServicestack
} from 'react-icons/fa6'

import { TopHeader } from '@components/TopHeader'
import Link from 'next/link'

export const Header = () => {
  return (
    <Fragment>
      <TopHeader module="partners" />
      <header className="w-full flex justify-center items-center mt-3 h-max relative bg-zinc-950 text-zinc-50">
        <video
          controls={false}
          loop
          autoPlay
          src="/assets/videos/13232-246463976_medium.mp4"
          width="100%"
        />
        <div className="absolute top-0 left-0 w-full z-[2] h-auto flex flex-row items-center p-5">
          <div className="w-max flex flex-row items-center gap-2">
            <Image
              src="/assets/images/svg/anluge-logo-light.svg"
              alt="Anluge"
              width={50}
              height={50}
            />
            <h5 className="text-4xl font-extrabold select-none pointer-events-none">
              Anluge
            </h5>
          </div>
          <div className="w-full flex flex-row items-center justify-end">
            <ul className="w-auto flex flex-row gap-7 items-center">
              <li className="flex relative">
                <Link
                  className="flex flex-row gap-2 items-center text-white font-bold"
                  href=""
                >
                  <i>
                    <FaHouse />
                  </i>
                  <span>Início</span>
                </Link>
              </li>
              <li className="flex relative">
                <Link
                  className="flex flex-row gap-2 items-center text-white font-bold"
                  href=""
                >
                  <i>
                    <FaServicestack />
                  </i>
                  <span>Serviços</span>
                </Link>
              </li>
              <li className="flex relative">
                <button
                  className="flex border-0 outline-none bg-transparent flex-row gap-2 items-center text-white font-bold"
                  type="button"
                >
                  <i>
                    <FaBarsStaggered />
                  </i>
                  <span>Menu</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-20 absolute top-0 left-0 h-full flex flex-col gap-4 text-zinc-100 items-center justify-center text-center">
          <h1 className="font-extrabold uppercase text-white">Hello, Man</h1>
          <p className="text-sm font-semibold max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            blanditiis deleniti officia quasi quas est sed, ipsam assumenda modi
            itaque veritatis nihil reiciendis sit libero, delectus eveniet enim
            repellendus sequi.
          </p>
          <ul className="flex flex-row gap-2 p-7">
            <li>
              <button
                type="button"
                className="flex flex-row gap-3 border-1 border-solid border-white py-[8px] hover:scale-105 transition-[scale] px-4 text-white rounded-3xl text-lg font-bold outline-none bg-transparent"
              >
                <span className="select-none pointer-events-none">
                  Entrar em contacto
                </span>
                <i className="bg-white text-zinc-800 rounded-full w-[25px] h-[25px] flex flex-row justify-center items-center">
                  <FaArrowRight />
                </i>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex flex-row gap-3 border-1 border-solid border-white py-[8px] hover:scale-105 transition-[scale] px-4 text-white rounded-3xl text-lg font-bold outline-none bg-transparent"
              >
                <span className="select-none pointer-events-none">
                  Visitar loja
                </span>
                <i className="bg-white text-zinc-800 rounded-full w-[25px] h-[25px] flex flex-row justify-center items-center">
                  <FaArrowRight />
                </i>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  )
}
