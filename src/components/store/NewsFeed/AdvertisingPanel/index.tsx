// import Image from 'next/image'
import Link from 'next/link'

type AdvertisingPanelProps = {
  image: string
  title: string
}

export const AdvertisingPanel: React.FunctionComponent<
  AdvertisingPanelProps
> = props => {
  return (
    <div className="w-full h-auto block">
      <Link href="/" className="w-full block relative h-auto">
        <div className="block w-full bg-[#bfbfbf] rounded-[12px]">
          <img
            className="block w-full h-auto border-none outline-none rounded-[12px] object-cover hover:opacity-90"
            src={`/assets/images/uploads/${props.image}`}
            alt={props.title}
          />
        </div>
      </Link>
    </div>
  )
}
