import { AddressCol } from './AddressCol'
import { FormContainer } from './FormContainer'
import { GeneralCallCenterCol } from './GeneralCallCenterCol'
import { SecondaryCallCenterCol } from './SecondaryCallCenterCol'
import { TechSupportCol } from './TechSupportCol'

export const ContactForm = () => {
  return (
    <section>
      <div
        id="map"
        className="relative h-[300px] overflow-hidden rounded-xl bg-cover bg-[50%] bg-no-repeat"
      >
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d13.2189448!3d-8.8158034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLocation!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="680"
          className="border-0 outline-none rounded-xl bg-blue-500"
          allowFullScreen
          loading="lazy"
        /> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353.58247914049633!2d13.240140230319524!3d-8.817110669870955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24bb4064e8d%3A0xee83582c921a550e!2sFarm%C3%A1cia%20Mecofarma%20-%20Kinaxixi!5e1!3m2!1sen!2sao!4v1726045354563!5m2!1sen!2sao"
          width="100%"
          height="450"
          className="border-0 outline-none rounded-xl bg-blue-500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="container md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] dark:bg-zinc-900 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 mt-6 md:-mt-[100px] backdrop-blur-[30px] border-solid border-[1px] border-gray-300 dark:border-zinc-800">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <FormContainer />
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <TechSupportCol />
                <AddressCol />
                <GeneralCallCenterCol />
                <SecondaryCallCenterCol />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
