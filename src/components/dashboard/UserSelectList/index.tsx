import { SelectList } from 'dashboard@components/SelectList'
import { UserProps } from '~/Types/UserProps'
import { useUser } from '~/utils/hooks/useUser'

type UserSelectListProps = {
  onSelect?: (user: UserProps) => void | Promise<void>
}

type UserSelectListComponent = React.FunctionComponent<UserSelectListProps>

export const UserSelectList: UserSelectListComponent = props => {
  // const [query, setQuery] = useState<string>('')

  const { users, loading } = useUser()

  // const inputChangeHandler: React.ChangeEventHandler = event => {
  //   const inputElement = event.target as HTMLInputElement

  //   setQuery(inputElement.value)
  // }

  // const userFilter = (user: UserProps) => {
  //   if (!noEmpty(query)) {
  //     return true
  //   }

  //   return Boolean(user.name.includes(query) || user.email.includes(query))
  // }

  return (
    // <Container>
    //   <Header>
    //     <SearchInputContainer>
    //       <i>
    //         <FaSearch />
    //       </i>
    //       <div>
    //         <input value={query} onChange={inputChangeHandler} />
    //       </div>
    //     </SearchInputContainer>
    //   </Header>
    //   <Body>
    //     <List>
    //       {(loading && <Spinner />) ||
    //         users.filter(userFilter).map(user => {
    //           const buttonClickHandler: React.MouseEventHandler = event => {
    //             event.preventDefault()

    //             if (typeof props.onSelect === 'function') {
    //               props.onSelect(user)
    //             }
    //           }

    //           return (
    //             <button
    //               key={user.id}
    //               type="button"
    //               onClick={buttonClickHandler}
    //             >
    //               <div>
    //                 <strong>{user.name}</strong>
    //               </div>
    //               <div>
    //                 <span>{user.email}</span>
    //               </div>
    //               <i>
    //                 <FaAngleRight />
    //               </i>
    //             </button>
    //           )
    //         })}
    //     </List>
    //   </Body>
    // </Container>
    <SelectList
      data={users}
      loading={loading}
      onSelect={props.onSelect}
      map={users =>
        users.map(user => ({
          id: user.id,
          title: user.name,
          subTitle: user.email,
          data: user
        }))
      }
    />
  )
}
