import React from 'react';
import Auth from '../Auth';
const axios = require('axios')

async function test() {
  try {
    const res = await axios.post('http://localhost:3000/auth/login');
    console.log('this is res', res.data);
  } catch (error) {
    console.error(error);
  }
}

test()

const generateFakeHabit = () => {
  const habitTracked = []

  for (let i = 1; i <= 365; i++) {
    const randomNum = Math.round(Math.random() * 100)
    if(randomNum > 50) {
      habitTracked.push(true)
    }else{
      habitTracked.push(false)
    }
  }

  return habitTracked
}

const Profile = props => {

  const handleLogout = () => {
    Auth.logout()
    props.history.push("/")
  }

  console.log('this is gerneateFakehabit', generateFakeHabit())

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <p>Profile page here</p>
    </div>
  );
}

export default Profile;
