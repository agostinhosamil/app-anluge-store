'use client'

import { Partner } from '@prisma/client'
import { useRef } from 'react'

import { useApp } from '@components/ApplicationContext'
import { FlatList } from '@components/FlatList'
import {
  EntityCard,
  EntityCardActionHandler
} from '@components/dashboard/EntityCard'
import { usePartner } from '@utils/hooks/usePartner'
import {
  createPartner,
  deletePartnerById,
  updatePartner
} from '@utils/models/partner'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'
import {
  CreatePartnerForm,
  CreatePartnerFormDataObject,
  CreatePartnerFormDataObjectSchema
} from 'dashboard@components/Forms/CreatePartnerForm'
import { uploadedImageUrl } from '~/utils'

export default function CompanyPartnersPage() {
  const { partners, loading, ...context } = usePartner()
  const partnerDataState = useRef<CreatePartnerFormDataObject>()

  const { openMediumFormDialog, alert, resolvePromise } = useApp()

  const createPartnerButtonClickHandler = async () => {
    const { data, error } = await openMediumFormDialog(
      CreatePartnerFormDataObjectSchema,
      () => <CreatePartnerForm data={partnerDataState.current} />
    )

    if (error) {
      return
    }

    const createdPartner = await resolvePromise(async () => {
      const partner = await createPartner(data)

      if (partner) {
        context.addPartner(partner)

        return true
      }
    })

    if (!createdPartner) {
      const response = await alert(
        'Erro',
        'Não foi possível completar o registro. Tente novamente.',
        {
          buttons: ['Buttons.Cancel', 'Buttons.Retry']
        }
      )

      if (response === 'AlertResponse.Retry') {
        partnerDataState.current = data

        createPartnerButtonClickHandler()
      }
    }
  }

  const partnerEditHandler: EntityCardActionHandler<
    Partner
  > = async partner => {
    const { data, error } = await openMediumFormDialog(
      CreatePartnerFormDataObjectSchema,
      () => <CreatePartnerForm data={{ partner }} />
    )

    if (error) {
      return
    }

    const updatedPartner = await resolvePromise(async () => {
      const partnerData = await updatePartner(partner.id, data)

      if (partnerData) {
        context.updatePartner(partner.id, partnerData)

        return true
      }
    })

    if (!updatedPartner) {
      const response = await alert(
        'Erro',
        'Não foi possível atualizar os dados do parceiro.\nTente novamente.',
        {
          buttons: ['Buttons.Cancel', 'Buttons.Retry']
        }
      )

      if (response === 'AlertResponse.Retry') {
        partnerDataState.current = data

        createPartnerButtonClickHandler()
      }
    }
  }

  const partnerRemoveHandler: EntityCardActionHandler<
    Partner
  > = async partner => {
    const alertResponse = await alert(
      'Tem certeza?',
      `O parceiro '${partner.name}' será eliminado dos registros.\nEsta ação não pode ser revertida.`,
      {
        buttons: ['Buttons.Yes', 'Buttons.No']
      }
    )

    if (alertResponse === 'AlertResponse.Yes') {
      const deletedPartner = await resolvePromise(async () => {
        const deleteResponse = await deletePartnerById(partner.id)

        if (deleteResponse) {
          context.deletePartner(partner.id)

          return true
        }
      })

      if (!deletedPartner) {
        const alertResponse = await alert(
          'Erro',
          'Não foi possível eliminar o parceiro.\nTente novamente.',
          {
            buttons: ['Buttons.Cancel', 'Buttons.Retry']
          }
        )

        if (alertResponse === 'AlertResponse.Retry') {
          partnerRemoveHandler(partner)
        }
      }
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <ContentHeader title="Parceiro">
        <ActionButton
          label="Registrar parceiro"
          icon="FaPlus"
          onClick={createPartnerButtonClickHandler}
        />
      </ContentHeader>
      <FlatList
        data={partners}
        itemsCountPerIteration={15}
        placeholderCountOnLoading={15}
        paginationStyle="standard"
        loading={loading}
        renderItem={partner => (
          <EntityCard
            title={partner.name}
            entity="partner"
            avatar={uploadedImageUrl(partner.logo)}
            icons={['Edit', 'Remove']}
            onEdit={() => partnerEditHandler(partner)}
            onRemove={() => partnerRemoveHandler(partner)}
          >
            <p className="w-full line-clamp-3 max-h-[78px] text-sm text-zinc-500">
              {partner.site}
            </p>
          </EntityCard>
        )}
      ></FlatList>
    </div>
  )
}
