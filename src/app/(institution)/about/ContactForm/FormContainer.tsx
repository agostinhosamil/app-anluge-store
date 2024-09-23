import { FloatingLabel, Form } from 'react-bootstrap'

import { LongTextField } from '@components/Form/LongTextField'

export const FormContainer = () => (
  <form method="post" action="/">
    <FloatingLabel
      controlId="user-name"
      label="Nome completo"
      className="mb-3 bootstrap-floating-label"
    >
      <Form.Control
        type="text"
        placeholder="Nome completo"
        autoComplete="off"
        name="user[name]"
      />
    </FloatingLabel>

    <FloatingLabel
      controlId="user-name"
      label="Endereço de email"
      className="mb-3 bootstrap-floating-label"
    >
      <Form.Control
        type="text"
        placeholder="Endereço de email"
        autoComplete="off"
        name="user[email]"
      />
    </FloatingLabel>

    <LongTextField label="Mensagem" name="user[message]" />

    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
      <input
        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
        type="checkbox"
        value=""
        id="exampleCheck96"
        defaultChecked
      />
      <label
        className="inline-block pl-[0.15rem] select-none hover:cursor-pointer dark:text-zinc-300"
        htmlFor="exampleCheck96"
      >
        Quero receber uma cópia desta mensagem
      </label>
    </div>

    <button
      type="button"
      className="mb-6 flex flex-row justify-center items-center w-full rounded bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white px-6 py-3 text-xs font-medium uppercase leading-normal lg:mb-0"
    >
      <span>Enviar mensagem</span>
    </button>
  </form>
)
