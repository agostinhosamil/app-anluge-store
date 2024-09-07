'use client'

import { useApp } from '@components/ApplicationContext'
import { FlatList } from '@components/FlatList'
import {
  EntityCard,
  EntityCardActionHandler
} from '@components/dashboard/EntityCard'
import { Service } from '@prisma/client'
import { useService } from '@utils/hooks/useService'
import {
  createService,
  deleteServiceById,
  updateService
} from '@utils/models/service'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'
import {
  CreateServiceForm,
  CreateServiceFormDataObject,
  CreateServiceFormDataObjectSchema
} from 'dashboard@components/Forms/CreateServiceForm'
import { useRef } from 'react'

export default function CompanyServicesPage() {
  const { services, loading, ...context } = useService()
  const serviceDataState = useRef<CreateServiceFormDataObject>()

  const { openMediumFormDialog, alert, resolvePromise } = useApp()

  const createServiceButtonClickHandler = async () => {
    const { data, error } = await openMediumFormDialog(
      CreateServiceFormDataObjectSchema,
      () => <CreateServiceForm data={serviceDataState.current} />
    )

    if (error) {
      return
    }

    const createdService = await resolvePromise(async () => {
      const service = await createService(data)

      if (service) {
        context.addService(service)

        return true
      }
    })

    if (!createdService) {
      const response = await alert(
        'Erro',
        'Não foi possível completar o registro. Tente novamente.',
        {
          buttons: ['Buttons.Cancel', 'Buttons.Retry']
        }
      )

      if (response === 'AlertResponse.Retry') {
        serviceDataState.current = data

        createServiceButtonClickHandler()
      }
    }
  }

  const serviceEditHandler: EntityCardActionHandler<
    Service
  > = async service => {
    const { data, error } = await openMediumFormDialog(
      CreateServiceFormDataObjectSchema,
      () => <CreateServiceForm data={{ service }} />
    )

    if (error) {
      return
    }

    const updatedService = await resolvePromise(async () => {
      const serviceData = await updateService(service.id, data)

      if (serviceData) {
        context.updateService(service.id, serviceData)

        return true
      }
    })

    if (!updatedService) {
      const response = await alert(
        'Erro',
        'Não foi possível atualizar os dados do serviço.\nTente novamente.',
        {
          buttons: ['Buttons.Cancel', 'Buttons.Retry']
        }
      )

      if (response === 'AlertResponse.Retry') {
        serviceDataState.current = data

        createServiceButtonClickHandler()
      }
    }
  }

  const serviceRemoveHandler: EntityCardActionHandler<
    Service
  > = async service => {
    const alertResponse = await alert(
      'Tem certeza?',
      `O serviço '${service.title}' será eliminado dos registros.\nEsta ação não pode ser revertida.`,
      {
        buttons: ['Buttons.Yes', 'Buttons.No']
      }
    )

    if (alertResponse === 'AlertResponse.Yes') {
      const deletedService = await resolvePromise(async () => {
        const deleteResponse = await deleteServiceById(service.id)

        if (deleteResponse) {
          context.deleteService(service.id)

          return true
        }
      })

      if (!deletedService) {
        const alertResponse = await alert(
          'Erro',
          'Não foi possível eliminar o serviço.\nTente novamente.',
          {
            buttons: ['Buttons.Cancel', 'Buttons.Retry']
          }
        )

        if (alertResponse === 'AlertResponse.Retry') {
          serviceRemoveHandler(service)
        }
      }
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <ContentHeader title="Serviços">
        <ActionButton
          label="Registrar serviço"
          icon="FaPlus"
          onClick={createServiceButtonClickHandler}
        />
      </ContentHeader>
      <FlatList
        data={services}
        itemsCountPerIteration={15}
        placeholderCountOnLoading={15}
        paginationStyle="standard"
        loading={loading}
        renderItem={service => (
          <EntityCard
            title={service.title}
            entity="service"
            icons={['Edit', 'Remove']}
            onEdit={() => serviceEditHandler(service)}
            onRemove={() => serviceRemoveHandler(service)}
          >
            <p className="w-full line-clamp-3 max-h-[78px] text-sm text-zinc-500">
              {service.description}
            </p>
          </EntityCard>
        )}
      ></FlatList>
    </div>
  )
}
