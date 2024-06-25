export const appOriginValueFallback = (): string => {
  const appApiUrl = String(process.env.NEXT_PUBLIC_API_URL)

  try {
    const appApiUrlObject = new URL(appApiUrl)

    return appApiUrlObject.origin
  } catch (err) {
    // pass
  }

  return ''
}
