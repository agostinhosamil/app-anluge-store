# Upload services

This service is the one used by the application to upload image files to the Anluge API.

## Usage

```typescript
import { AnlugeUploadClient } from '@services/upload'

type uploadedImageSizes = Array<string> | {
  [key: string]: string
}

const uploadClient = new AnlugeUploadClient({
  uploadedImageSizes: {
    large: '2000x200',
    default: '800x800'
  },

  pathPrefix: '/categories'
})

const file: File | Blob

const uploadedImage = uploadClient.uploadFile(file)

/**
 * handle upload to server
 * 
 * - Generate all file variants (sizes)
 * - Upload all files to the server
 * - Get the server response with file data
 * 
 */

// response
{
  imageName: 'uuid-uuid-uuid.jpg',
  imagePath: '/static/uploads/categories/uuid-uuid-uuid.jpg',
  imageUrl: 'https://cnd-static.anluge.com/static/uploads/categories/uuid-uuid-uuid.jpg'
}
```

### Parameters

To get an image in a specific size, should use the url like:

https://cnd-static.anluge.com/static/uploads/categories/uuid-uuid-uuid.jpg@{size}

E.g:

https://cnd-static.anluge.com/static/uploads/categories/uuid-uuid-uuid.jpg@large
https://cnd-static.anluge.com/static/uploads/categories/uuid-uuid-uuid.jpg@small
https://cnd-static.anluge.com/static/uploads/categories/uuid-uuid-uuid.jpg@700x300



https://cnd.anluge.com/static/files/10000000000202930293092/10000000000202930293092@small


10000000000202930293092/10000000000202930293092

