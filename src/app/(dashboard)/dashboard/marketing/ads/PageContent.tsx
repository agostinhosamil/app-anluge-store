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
import {
  AdvertisingListItem,
  AdvertisingListWrapper,
  Container
} from './styles'

type PageContentProps = {
  advertisingList: Array<AdvertiseProps>
}

type PageContentComponent = React.FunctionComponent<PageContentProps>

export const PageContent: PageContentComponent = ({ advertisingList }) => {
  const [showCreateAdvertiseDialog, setShowCreateAdvertiseDialog] =
    useState<boolean>(false)

  const createAdvertiseDialogCloseHandler = () => {
    setShowCreateAdvertiseDialog(false)
  }

  const createAdvertiseButtonClickHandler = () => {
    setShowCreateAdvertiseDialog(true)
  }

  const createAdvertiseFormSubmitHandler: CreateAdvertiseFormSubmitHandler = ({
    data
  }) => {
    console.log('Form Data => ', data)
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
            <AdvertisingListItem>
              <EntityCard
                title={advertising.title || 'Untitled'}
                avatar={uploadedImageUrl(advertising.banner)}
                avatarSize="xx-large"
                entity="advertising"
                icons={['View', 'Edit', 'Options']}
              />
            </AdvertisingListItem>
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
