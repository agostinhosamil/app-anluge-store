import { NextRequest } from 'next/server'

import { formDataToJson } from '~/utils/formDataToJson'

export const getRequestBody = async <RequestDataProps = any>(
  request: NextRequest
): Promise<RequestDataProps> => {
  try {
    const jsonData = (await request.json()) as RequestDataProps

    return jsonData
  } catch (err) {}

  const formData = await request.formData()

  const requestBody = formDataToJson<RequestDataProps>(formData)

  return requestBody
}
