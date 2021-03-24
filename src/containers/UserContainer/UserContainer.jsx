import React from 'react'
import withUserLayout from '../../hoc/withUserLayout'
import UserTable from './components/UserTable/UserTable';
import { UserWrapper } from './UserContainer.styles';

const UserContainer = ({
  users
}) => {
  return (
    <UserWrapper>
      <UserTable users={users}/>
    </UserWrapper>
  )
}

export default withUserLayout(UserContainer);
