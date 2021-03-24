import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestUsers, clearCurrentUserData } from '../containers/UserContainer/meta/actions';
import { clearCartData } from '../containers/ProductContainer/meta/action';

const withUserLayout = (Component) => {
  const ComposedComponent = ({
    users,
    requestUsers,
    clearCartData,
    clearCurrentUserData
  }) => {

    useEffect(() => {
      requestUsers();
      clearCartData();
      clearCurrentUserData();
    }, [])

    return (
      <Component users={users} />
    )
  }

  const mapStateToProps = state => ({
    users: state.user.data
  });

  const mapDispatchToProps = {
    requestUsers,
    clearCartData,
    clearCurrentUserData
  }
  return connect(mapStateToProps, mapDispatchToProps)(ComposedComponent);
}

export default withUserLayout;
