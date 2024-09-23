import { FaPhone } from 'react-icons/fa6'

export const GeneralCallCenterCol = () => (
  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
    <div className="flex flex-col gap-y-5 md:flex-row items-center justify-center md:justify-start md:items-start">
      <div className="shrink-0">
        <div className="inline-block rounded-md bg-sky-200 dark:bg-opacity-10 p-4 text-primary">
          <FaPhone />
        </div>
      </div>
      <div className="md:ml-6 grow [&>p]:text-center md:[&>p]:text-left">
        <p className="mb-2 font-bold dark:text-zinc-50">Atendimentos gerais</p>
        <p className="text-neutral-500">(+244) 928 250 640</p>
      </div>
    </div>
  </div>
)
