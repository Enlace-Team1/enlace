import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import UserInfo from '../components/UserInfo';
import InviteBtn from '../components/InviteBtn';
import PenInvs from '../components/PenInvs';
import PersonalInfo from '../components/PersonalInfo';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/index'


const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Container style={{backgroundColor: "#02353C"}}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PersonalInfo />
      <Calendar></Calendar>
      <PenInvs />
      <Footer />
    </Container>


  )
}

export default Profile;