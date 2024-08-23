import StarIcon from './star.svg'

export const ProductRatesOverview = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 px-8 py-10 font-[sans-serif]">
      <h2 className="text-[#333] font-bold text-2xl text-center">
        Rating overview
      </h2>
      <div className="text-center my-8">
        <h3 className="text-[#333] font-extrabold text-5xl">4.0</h3>
        <div className="flex justify-center space-x-2 my-2">
          <StarIcon className="fill-[#facc15]" />
          <StarIcon className="fill-[#facc15]" />
          <StarIcon className="fill-[#facc15]" />
          <StarIcon className="fill-[#facc15]" />
          <StarIcon />
        </div>
        <p className="text-base text-[#333] font-semibold">1,153 ratings</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <p className="text-base text-[#333] font-bold">5.0</p>
          <svg
            className="w-5 fill-[#333] ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-4 ml-3">
            <div className="w-2/3 h-full rounded bg-[#facc15]"></div>
          </div>
          <p className="text-base text-[#333] font-bold ml-3">66%</p>
        </div>
        <div className="flex items-center">
          <p className="text-base text-[#333] font-bold">4.0</p>
          <svg
            className="w-5 fill-[#333] ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-4 ml-3">
            <div className="w-1/3 h-full rounded bg-[#facc15]"></div>
          </div>
          <p className="text-base text-[#333] font-bold ml-3">33%</p>
        </div>
        <div className="flex items-center">
          <p className="text-base text-[#333] font-bold">3.0</p>
          <svg
            className="w-5 fill-[#333] ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-4 ml-3">
            <div className="w-1/6 h-full rounded bg-[#facc15]"></div>
          </div>
          <p className="text-base text-[#333] font-bold ml-3">16%</p>
        </div>
        <div className="flex items-center">
          <p className="text-base text-[#333] font-bold">2.0</p>
          <svg
            className="w-5 fill-[#333] ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-4 ml-3">
            <div className="w-1/12 h-full rounded bg-[#facc15]"></div>
          </div>
          <p className="text-base text-[#333] font-bold ml-3">8%</p>
        </div>
        <div className="flex items-center">
          <p className="text-base text-[#333] font-bold">1.0</p>
          <svg
            className="w-5 fill-[#333] ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-4 ml-3">
            <div className="w-[6%] h-full rounded bg-[#facc15]"></div>
          </div>
          <p className="text-base text-[#333] font-bold ml-3">6%</p>
        </div>
      </div>
    </div>
  )
}
