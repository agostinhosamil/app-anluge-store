import { ImageResponse } from 'next/og'

type Styles = {
  [key: string]: React.CSSProperties
}

export const GET = () => {
  const styles: Styles = {
    div: {
      width: '100%',
      height: '100%',
      backgroundColor: '#daa540',
      color: '#ffffff',
      border: '30px solid #daa',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%'
    },

    text: {
      color: 'inherit'
    }
  }

  const ImageElement = (
    <div style={styles.div}>
      <h1 style={styles.text}>Hey Man</h1>
    </div>
  )

  return new ImageResponse(ImageElement, {
    width: 600,
    height: 600
  })
}
