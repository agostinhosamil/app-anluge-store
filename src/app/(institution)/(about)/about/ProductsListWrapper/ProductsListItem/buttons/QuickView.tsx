import { FaEye } from 'react-icons/fa6'

import { Drawer, DrawerContent, DrawerTrigger } from 'ui@components/drawer'

export const QuickViewButton = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          type="button"
          data-tooltip-target="tooltip-quick-look"
          className="rounded-lg px-2 pt-1 pb-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <i className="dark:text-gray-500">
            <FaEye />
          </i>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full flex flex-col gap-3 md:gap-6 lg:gap-12 p-[16px] md:p-10 lg:p-16">
          <div className="w-full flex flex-col gap-4 md:flex-row">
            <div className="w-full max-w-md">
              <img
                className="w-full"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              />
            </div>
            <div>
              <h1>Product Name Here</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis laborum quod dolorem ullam accusantium soluta ab,
                consequuntur tempora placeat cumque possimus culpa fuga ipsa
                quos deserunt, velit perspiciatis quis. Mollitia.
              </p>
            </div>
          </div>
          <span>Hey: product data</span>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
