export const renderRichTextContent = (text: string): React.ReactNode => {
  return (
    <pre
      style={{
        display: 'flex',
        wordBreak: 'break-word',
        whiteSpace: 'break-spaces',
        margin: '0px'
      }}
    >
      {text}
    </pre>
  )
}
