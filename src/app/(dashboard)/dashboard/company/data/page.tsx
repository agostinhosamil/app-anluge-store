'use client'

import { Fragment, useState } from 'react'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import { FormGroup } from '@components/Form/FormGroup'
import { LongTextField } from '@components/Form/LongTextField'
import { SelectField } from '@components/Form/SelectField'
import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { Spinner } from 'react-bootstrap'
import { FaX } from 'react-icons/fa6'
import { SelectFieldData } from '~/components/Form/SelectField/types'
import companyData from '~/config/cache/company-data/index.json'
import { generateRandomId, range } from '~/utils'
import { formDataToJson } from '~/utils/formDataToJson'
import {
  CompanyDataForm,
  InputButtonWrapper,
  InputContainer,
  InputRowWrapper,
  LoadingScreen
} from './styles'

type Contact = {
  id: string
  value?: string
}

export default function CompanyDataPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [emails, setEmails] = useState<Array<Contact>>(
    companyData.emailAddresses.map(email => ({
      id: generateRandomId(),
      value: email
    }))
  )
  const [phones, setPhones] = useState<Array<Contact>>(
    companyData.phoneNumbers.map(phone => ({
      id: generateRandomId(),
      value: phone
    }))
  )

  const weekDays = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo'
  ]

  function arrayToSelectFieldData<T = any>(arr: Array<T>): SelectFieldData {
    return arr.map((arrayItem, index) => ({
      label: String(arrayItem),
      value: index
    }))
  }

  const deletePhone = (id: string) => {
    setPhones(phones.filter(phone => phone.id !== id))
  }

  const deleteEmail = (id: string) => {
    setEmails(emails.filter(email => email.id !== id))
  }

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    setLoading(true)

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)
    const jsonFormData = formDataToJson(formData)

    console.log({ jsonFormData })
  }

  return (
    <Fragment>
      <CompanyDataForm
        method="post"
        action="/api/dashboard/company/data"
        onSubmit={formSubmitHandler}
      >
        <ContentHeader title="Editar dados da empresa">
          <ActionButton
            icon="FaRegFloppyDisk"
            label="Salvar alterações"
            disabled={loading}
            type="submit"
          />
        </ContentHeader>
        {loading && (
          <LoadingScreen>
            <Spinner />
          </LoadingScreen>
        )}
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="company-name"
              label="Nome da empresa"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="company[name]"
                placeholder="Nome da empresa"
                autoComplete="off"
                defaultValue={companyData.name}
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="company-tax-name"
              label="Nome fiscal da empresa"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="company[taxName]"
                placeholder="Nome fiscal da empresa"
                autoComplete="off"
                defaultValue={companyData.taxName}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <FloatingLabel
              controlId="company-tax-id"
              label="NIF"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="company[taxId]"
                placeholder="NIF"
                autoComplete="off"
                defaultValue={companyData.taxId}
              />
            </FloatingLabel>
          </Col>
          <Col md={9}>
            <FloatingLabel
              controlId="company-address"
              label="Endereço"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="company[address]"
                placeholder="Endereço"
                autoComplete="off"
                defaultValue={companyData.address}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <LongTextField
              label="Descrição curta"
              title="Breve descrição sobre a empresa"
              name="company[shortDescription]"
              defaultValue={companyData.shortDescription}
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <LongTextField
              rows={7}
              label="Descrição longa"
              title="Descrição mais abrangente sobre a empresa"
              name="company[description]"
              defaultValue={companyData.description}
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup title="Horário de funcionamento">
              <Row>
                <Col md={6}>
                  <SelectField
                    label="Início"
                    name="company[dayExpedient][start]"
                    data={arrayToSelectFieldData(range(24).slice(5))}
                    defaultValue={companyData.dayExpedient.start}
                  />
                </Col>
                <Col md={6}>
                  <SelectField
                    label="Término"
                    name="company[dayExpedient][end]"
                    data={arrayToSelectFieldData(range(24).slice(5))}
                    defaultValue={companyData.dayExpedient.end}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup title="Dias de funcionamento semanal">
              <Row>
                <Col md={6}>
                  <SelectField
                    label="Dia de início"
                    name="company[workingDays][start]"
                    data={arrayToSelectFieldData(weekDays)}
                    defaultValue={companyData.workingDays.start}
                  />
                </Col>
                <Col md={6}>
                  <SelectField
                    label="Dia de término"
                    name="company[workingDays][end]"
                    data={arrayToSelectFieldData(weekDays)}
                    defaultValue={companyData.workingDays.end}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FormGroup title="Endereços de email">
              {emails.map(({ id, value }, i) => (
                <InputContainer key={id}>
                  <InputRowWrapper>
                    <Row>
                      <Col md={12}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label={`Endereço de email${i === 0 ? ' principal' : ''}`}
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="company[emailAddresses][]"
                            placeholder={`Endereço de email${i === 0 ? ' principal' : ''}`}
                            autoComplete="off"
                            defaultValue={value}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </InputRowWrapper>
                  <InputButtonWrapper>
                    <button type="button" onClick={() => deleteEmail(id)}>
                      <FaX />
                    </button>
                  </InputButtonWrapper>
                </InputContainer>
              ))}
              <div className="w-100 mt-1">
                <button
                  onClick={() =>
                    setEmails([...emails, { id: generateRandomId() }])
                  }
                  className="btn btn-primary"
                  type="button"
                >
                  {`Adicionar${emails.length >= 1 ? ' mais' : ''} um endereço de email`}
                </button>
              </div>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FormGroup title="Números de telefone">
              {phones.map(({ id, value }, i) => (
                <InputContainer key={id}>
                  <InputRowWrapper>
                    <Row>
                      <Col md={12}>
                        <FloatingLabel
                          controlId={`company-phone-${id}`}
                          label={`Número de telefone${i === 0 ? ' principal' : ''}`}
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="company[phoneNumbers][]"
                            placeholder={`Número de telefone${i === 0 ? ' principal' : ''}`}
                            autoComplete="off"
                            defaultValue={value}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </InputRowWrapper>
                  <InputButtonWrapper>
                    <button type="button" onClick={() => deletePhone(id)}>
                      <FaX />
                    </button>
                  </InputButtonWrapper>
                </InputContainer>
              ))}
              <div className="w-100 mt-1">
                <button
                  onClick={() =>
                    setPhones([...phones, { id: generateRandomId() }])
                  }
                  className="btn btn-primary"
                  type="button"
                >
                  {`Adicionar${phones.length >= 1 ? ' mais' : ''} um número de telefone`}
                </button>
              </div>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FormGroup
              title="Redes sociais"
              subtitle="Insira o link das respectivas redes sociais nos campos abaixo"
              footer="Para o whatsapp, insira o número"
            >
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingInput-Facebook"
                    label="Facebook"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="company[socialMediaFacebook]"
                      placeholder="Facebook"
                      autoComplete="off"
                      defaultValue={companyData.socialMediaFacebook}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingInput-LinkedIn"
                    label="LinkedIn"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="company[socialMediaLinkedin]"
                      placeholder="LinkedIn"
                      autoComplete="off"
                      defaultValue={companyData.socialMediaLinkedin}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingInput-Instagram"
                    label="Instagram"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="company[socialMediaInstagram]"
                      placeholder="Instagram"
                      autoComplete="off"
                      defaultValue={companyData.socialMediaInstagram}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingInput-whatsapp"
                    label="whatsapp"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="company[socialMediaWhatsapp]"
                      placeholder="whatsapp"
                      autoComplete="off"
                      defaultValue={companyData.socialMediaWhatsapp}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <FormSubmit disabled={loading}>Salvar alterações</FormSubmit>
          </Col>
        </Row>
      </CompanyDataForm>
    </Fragment>
  )
}
