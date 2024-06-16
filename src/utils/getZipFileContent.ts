import { loadAsync } from 'jszip'

export type GetZipFileContentUtil = (zipFile: File) => Promise<Array<File>>

export const getZipFileContent: GetZipFileContentUtil = async zipFile => {
  const zipFileContent: Array<File> = []

  try {
    const zipFileData = await loadAsync(zipFile)

    const loadedFiles = zipFileData.files

    for (const key in loadedFiles) {
      const loadedFile = loadedFiles[key]

      const loadedFIleDataBlobObject = await loadedFile.async('blob')

      const loadedFIleDataObject = new File(
        [loadedFIleDataBlobObject],
        loadedFile.name,
        {
          lastModified: Date.now(),
          type: 'image/jpeg'
        }
      )

      // console.log(
      //   '>>> loadedFIleDataObject: ',
      //   URL.createObjectURL(loadedFIleDataObject)
      // )
      zipFileContent.push(loadedFIleDataObject)
    }

    // console.log('zipFileData => ', zipFileData.files)
  } catch (err) {
    console.log('Error => ', err)
  }

  return zipFileContent
}
