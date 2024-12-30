import React, { useState } from 'react'
import Yetregister from './Yetregister';
import Registered from './Registered';

function Register() {
    const [reg,setreg]=useState(0);
  return (
    <div>
        <Yetregister/>
    </div>
  )
}

export default Register