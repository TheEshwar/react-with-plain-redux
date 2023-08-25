import React, { useEffect } from 'react'
import { fetchUsers } from "../redux"
import { connect } from 'react-redux'

function UserContainer({ userData, fetchUsers}) {

  useEffect(()=>{
    fetchUsers()
  },[])

  return userData.loading ? (<h2>Loading...</h2>) : userData.error ? (<h2>{userData.error}</h2>) : (  <div>
    
    <div>
      {console.log('\n compo - ', userData.users)}
    {
        userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
    }
    </div>
  </div>)
}

const mapStateToProps = state => {
  console.log('\n state :- ', state);
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)