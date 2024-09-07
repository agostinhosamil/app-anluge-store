import { FaPhoneAlt } from 'react-icons/fa'

export const SecondaryCallCenterCol = () => (
  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
    <div className="align-start flex">
      <div className="shrink-0">
        <div className="inline-block rounded-md bg-sky-200 dark:bg-opacity-10 p-4 text-primary">
          <FaPhoneAlt />
        </div>
      </div>
      <div className="ml-6 grow">
        <p className="mb-2 font-bold dark:text-zinc-50">Telemóvel</p>
        <p className="text-neutral-500">(+244) 928 250 640</p>
      </div>
    </div>
  </div>
)
