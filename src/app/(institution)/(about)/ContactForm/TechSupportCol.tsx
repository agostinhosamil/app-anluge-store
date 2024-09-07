import { FaHeadphones } from 'react-icons/fa6'

export const TechSupportCol = () => (
  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
    <div className="flex items-start">
      <div className="shrink-0">
        <div className="inline-block rounded-md bg-sky-200 dark:bg-opacity-10 p-4 text-primary">
          <FaHeadphones />
        </div>
      </div>
      <div className="ml-6 grow">
        <p className="mb-2 font-bold dark:text-zinc-50">Suporte técnico</p>
        <p className="text-sm text-neutral-500">suporte@anluge.com</p>
        {/* <p className="text-sm text-neutral-500">(+244) 945 678 675</p> */}
      </div>
    </div>
  </div>
)
