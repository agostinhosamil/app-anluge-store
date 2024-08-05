import { FaCogs } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'

type ServiceListItemProps = {
  service: {
    title: string
    description: string
  }
}

type ServiceListItemComponent = React.FunctionComponent<ServiceListItemProps>

export const ServiceListItem: ServiceListItemComponent = ({ service }) => {
  return (
    <li>
      <div className="service-card">
        <strong>{service.title}</strong>
        <p>{service.description}</p>
        <div>
          <data>
            <FaCogs />
          </data>
          <data>
            <a href="#">
              <FaArrowRight />
            </a>
          </data>
        </div>
      </div>
    </li>
  )
}
