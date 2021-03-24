import React from 'react';
import { UserTableHeader, UserTableHeading, UserTableRow, UserTableTd, UserTableWrapper } from './UserTable.styles'
import moment from 'moment';
import { Button } from '../../../../components';
import { useHistory, withRouter } from 'react-router';

const UserTable = ({ users }) => {

  const history = useHistory();

  const calcYear = (date) => {
    let a = moment(date);
    let b = moment();
    return b.diff(a, 'years');
  }

  return (
    <UserTableWrapper>
      <UserTableHeader>
        <UserTableHeading width='20%' align='center'>First Name</UserTableHeading>
        <UserTableHeading width='20%' align='center'>Last Name</UserTableHeading>
        <UserTableHeading width='25%' align='center'>Date of Birth</UserTableHeading>
        <UserTableHeading width='25%' align='center'>Qualification</UserTableHeading>
        <UserTableHeading width='10%' align='center'></UserTableHeading>
      </UserTableHeader>
      {users && users.length > 0 && users.map((item, index) => (
        <UserTableRow bgColor={calcYear(item.dob) > 30 ? 'green' : 'yellow'} key={item}>
          <UserTableTd width='20%' align='center'>{item.firstName}</UserTableTd>
          <UserTableTd width='20%' align='center'>{item.lastName}</UserTableTd>
          <UserTableTd width='25%' align='center'>{moment(item.dob).format('ll')}</UserTableTd>
          <UserTableTd width='25%' align='center'>{item.qualification}</UserTableTd>
          <UserTableTd width='10%' align='center'>
            <Button onClick={() => history.push(`product/${item.id}`)}>View Products</Button>
          </UserTableTd>
        </UserTableRow>
      ))}
    </UserTableWrapper>
  )
}

export default withRouter(UserTable);
