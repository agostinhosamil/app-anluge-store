'use client'

import { Dialog } from '@components/Dialog'
import { FlatList } from '@components/FlatList'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'
import { EntityCard } from 'dashboard@components/EntityCard'
import {
  CreateAdvertiseForm,
  CreateAdvertiseFormSubmitHandler
} from 'dashboard@components/Forms/CreateAdvertiseForm'
import { uploadedImageUrl } from '~/utils'

import { useState } from 'react'
import { AdvertiseProps } from '~/Types/Advertise'
import { createAdvertise } from '~/utils/models/advertise'
import { AdvertisingListWrapper, Container } from './styles'

type PageContentProps = {
  advertisingList: Array<AdvertiseProps>
}

type PageContentComponent = React.FunctionComponent<PageContentProps>

export const PageContent: PageContentComponent = ({ advertisingList }) => {
  const [createAdvertiseFormLoading, setCreateAdvertiseFormLoading] =
    useState<boolean>(false)
  const [showCreateAdvertiseDialog, setShowCreateAdvertiseDialog] =
    useState<boolean>(false)

  const createAdvertiseDialogCloseHandler = () => {
    setShowCreateAdvertiseDialog(false)
  }

  const createAdvertiseButtonClickHandler = () => {
    setShowCreateAdvertiseDialog(true)
  }

  const createAdvertiseFormSubmitHandler: CreateAdvertiseFormSubmitHandler =
    async ({ data }) => {
      // console.log('>>> Advertise data: ', data)

      const createdAdvertise = await createAdvertise(data)

      if (!createdAdvertise) {
        setCreateAdvertiseFormLoading(false)
        return alert('Could not create advertise')
      }

      // console.log('>>> createdAdvertise: ', createdAdvertise)

      setShowCreateAdvertiseDialog(false)
    }

  return (
    <Container>
      <ContentHeader title="Anúncios">
        <ActionButton
          icon="FaPlus"
          label="Criar anúncio"
          onClick={createAdvertiseButtonClickHandler}
        />
      </ContentHeader>
      <AdvertisingListWrapper>
        <FlatList
          data={advertisingList}
          renderItem={advertising => (
            // <AdvertisingListItem>
            <EntityCard
              title={advertising.title || 'Untitled'}
              avatar={uploadedImageUrl(advertising.banner)}
              avatarSize="normal"
              entity="advertising"
              icons={['View', 'Edit', 'Options']}
            >
              <span>{advertising.content}</span>
            </EntityCard>
            // {/* </AdvertisingListItem> */}
          )}
        />
      </AdvertisingListWrapper>

      <Dialog
        title="Criar anúncio"
        size="x-large"
        onClose={createAdvertiseDialogCloseHandler}
        show={showCreateAdvertiseDialog}
      >
        <CreateAdvertiseForm onFormSubmit={createAdvertiseFormSubmitHandler} />
      </Dialog>
    </Container>
  )
}
