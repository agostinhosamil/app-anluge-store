import { FlatListProps } from './types'

// import * as Client from '.'

export * from './types'

export const FlatList: React.FunctionComponent<FlatListProps> = async props => {
  console.log('>>> props => ', props, '\n\n\n\n')

  return (
    <div>
      <h1>(((FlatList)))</h1>
    </div>
  )
}
