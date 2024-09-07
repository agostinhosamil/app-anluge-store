import { Heart, ShoppingCart, Star } from 'lucide-react'

export const ProductCard = () => {
  return (
    <div className="relative m-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border-[1px] border-solid border-gray-100 bg-white dark:!bg-zinc-900 dark:border-zinc-800 shadow-md dark:text-zinc-50">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-3 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900 dark:text-zinc-50">
            Nike Air MX Super 2500 - Red
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 dark:text-zinc-300">
              $449
            </span>
            <span className="text-sm text-slate-900 line-through dark:text-zinc-300">
              $699
            </span>
          </p>
          <div className="flex items-center">
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <span className="mr-2 ml-3 rounded bg-yellow-200 text-yellow-600 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <div className="w-full flex flex-row gap-2 items-center">
          <button
            type="button"
            role="button"
            className="outline-none border-0 flex items-center justify-center rounded-md bg-zinc-500 hover:bg-zinc-600 dark:bg-slate-900 size-11 px-2 box-content text-center text-sm font-medium text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <Heart />
          </button>

          <button
            type="button"
            role="button"
            className="outline-none w-full border-0 flex gap-2 items-center justify-center rounded-md bg-slate-900 dark:bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <ShoppingCart />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
