import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { z } from 'zod'

import { DropZone } from '@components/DropZone'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { imageFileRef } from '~/utils/zod'

export const CreatePartnerFormDataObjectSchema = z.object({
  partner: z.object({
    name: z.string().min(3),
    site: z.string().url().nullable(),
    logo: imageFileRef({
      uploadedImageObjectFit: 'fill',
      imageSet: 'partners',
      uploadedImageSizes: {
        small: '70x70',
        normal: '120x120',
        large: '220px220px',
        'x-large': '350x350'
      }
    })
      .transform(uploadedImage => uploadedImage?.name ?? null)
      .nullable()
  })
})

export type CreatePartnerFormDataObject = z.infer<
  typeof CreatePartnerFormDataObjectSchema
>

type CreatePartnerFormProps = {
  data?: CreatePartnerFormDataObject
}

type CreatePartnerFormComponent =
  React.FunctionComponent<CreatePartnerFormProps>

export const CreatePartnerForm: CreatePartnerFormComponent = ({ data }) => {
  return (
    <form className="w-full pt-2 pb-0 flex flex-col">
      <Row>
        <Col md={12}>
          <strong className="mb-4 text-2xl font-semibold inline-block dark:text-zinc-50">
            Registrar parceiro
          </strong>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FloatingLabel
            controlId="partner-title"
            label="Nome da empresa"
            className="mb-3 bootstrap-floating-label"
          >
            <Form.Control
              type="text"
              placeholder="Nome da empresa"
              autoComplete="off"
              name="partner[name]"
              defaultValue={data?.partner.name}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel
            controlId="partner-title"
            label="?Site da empresa"
            className="mb-3 bootstrap-floating-label"
          >
            <Form.Control
              type="text"
              placeholder="Site da empresa"
              autoComplete="off"
              name="partner[site]"
              defaultValue={data?.partner.site ?? ''}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <span className="block mb-2 dark:text-zinc-100">
            Logotipo da empresa
          </span>
          <DropZone height={70} name="partner[logo]" />
        </Col>
      </Row>

      <FormSubmit>Salvar</FormSubmit>
    </form>
  )
}
