import { FaLocationArrow } from 'react-icons/fa6'

export const AddressCol = () => (
  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
    <div className="flex items-start">
      <div className="srink-0">
        <div className="inline-block rounded-md bg-sky-200 dark:bg-opacity-10 p-4 text-primary">
          <FaLocationArrow />
        </div>
      </div>
      <div className="ml-6 grow">
        <p className="mb-2 font-bold dark:text-zinc-50">Localização</p>
        <p className="text-sm text-neutral-500">
          Luanda, <br />
          Kinaxixi, Rua Comandante Kwenha
          <br />
        </p>
      </div>
    </div>
  </div>
)
