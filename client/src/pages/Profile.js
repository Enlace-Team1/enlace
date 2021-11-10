import React from 'react'
import Calendar from '../components/Calendar'
import UserInfo from '../components/UserInfo'
import InviteBtn from '../components/InviteBtn'
import PenInvs from '../components/PenInvs'
import PersonalInfo from '../components/PersonalInfo'

const Profile = () => {
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
      >
        
      <h1>Profile</h1>
    </div>

  return (
    <div>
    <PersonalInfo/>
    <UserInfo/>
    <PenInvs/>
    <InviteBtn/>
    <Calendar></Calendar>

    </div>


  )
}

export default Profile
