type SlideProps = {
  width?: ''
}

type SlideComponent = React.FunctionComponent<
  React.PropsWithChildren & SlideProps
>

export const Slide: SlideComponent = ({ children }) => {
  return <div>{children}</div>
}
