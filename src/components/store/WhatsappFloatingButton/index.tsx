import { FaWhatsapp } from 'react-icons/fa6'

export const WhatsappFloatingButton = () => {
  return (
    <div className="fixed right-8 bottom-8 z-10">
      <a
        href="https://wa.me/+244928250640"
        target="_blank"
        rel="noreferrer"
        className="flex size-10 md:size-12 lg:size-16 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 hover:scale-105 transition-transform active:scale-110 flex-row items-center justify-center text-white shadow-lg"
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  )
}
