type PageSectionWrapperProps = React.PropsWithChildren

type PageSectionWrapperComponent =
  React.FunctionComponent<PageSectionWrapperProps>

export const PageSectionWrapper: PageSectionWrapperComponent = props => {
  return <div className="w-full max-w-[1320px] m-auto">{props.children}</div>
}
