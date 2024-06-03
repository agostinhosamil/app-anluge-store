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
import { SelectFieldData } from '~/components/Form/SelectField/types'
import { range } from '~/utils'

export default function CompanyDataPage() {
  const [emailsCount, setEmailsCount] = useState<number>(1)
  const [phoneNumbersCount, setPhoneNumbersCount] = useState<number>(1)

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

  return (
    <Fragment>
      <ContentHeader title="Editar dados da empresa">
        <ActionButton
          icon="FaRegFloppyDisk"
          label="Salvar alterações"
          onClick={() => {}}
        />
      </ContentHeader>

      <form method="post" action="/api/dashboard/company/data">
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="floatingInput"
              label="Nome da empresa"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="company[name]"
                placeholder="Nome da empresa"
                autoComplete="off"
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="floatingInput"
              label="Nome fiscal da empresa"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="company[taxName]"
                placeholder="Nome fiscal da empresa"
                autoComplete="off"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FloatingLabel
              controlId="floatingInput"
              label="Endereço"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="company[address]"
                placeholder="Endereço"
                autoComplete="off"
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
                    data={arrayToSelectFieldData(range(24).slice(5))}
                  />
                </Col>
                <Col md={6}>
                  <SelectField
                    label="Término"
                    data={arrayToSelectFieldData(range(24).slice(5))}
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
                    data={arrayToSelectFieldData(weekDays)}
                  />
                </Col>
                <Col md={6}>
                  <SelectField
                    label="Dia de término"
                    data={arrayToSelectFieldData(weekDays)}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FormGroup title="Endereços de email">
              {range(emailsCount).map(i => (
                <Row key={i}>
                  <Col md={12}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label={`Endereço de email${i === 1 ? ' principal' : ''}`}
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        name="company[emailAddress][]"
                        placeholder={`Endereço de email${i === 1 ? ' principal' : ''}`}
                        autoComplete="off"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              ))}
              <div className="w-100 mt-3">
                <button
                  onClick={() => setEmailsCount(emailsCount + 1)}
                  type="button"
                >
                  Adicionar mais um endereço de email
                </button>
              </div>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FormGroup title="Números de telefone">
              {range(phoneNumbersCount).map(i => (
                <Row key={i}>
                  <Col md={12}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label={`Número de telefone${i === 1 ? ' principal' : ''}`}
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        name="company[phoneNumber][]"
                        placeholder={`Número de telefone${i === 1 ? ' principal' : ''}`}
                        autoComplete="off"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              ))}
              <div className="w-100 mt-3">
                <button
                  onClick={() => setPhoneNumbersCount(phoneNumbersCount + 1)}
                  type="button"
                >
                  Adicionar mais um número de telefone
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
                      name="company[socialMedia:facebook]"
                      placeholder="Facebook"
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingInput-Twitter"
                    label="Twitter"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="company[socialMedia:twitter]"
                      placeholder="Twitter"
                      autoComplete="off"
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
                      name="company[socialMedia:instagram]"
                      placeholder="Instagram"
                      autoComplete="off"
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
                      name="company[socialMedia:whatsapp]"
                      placeholder="whatsapp"
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <FormSubmit>Salvar alterações</FormSubmit>
          </Col>
        </Row>
      </form>
    </Fragment>
  )
}
