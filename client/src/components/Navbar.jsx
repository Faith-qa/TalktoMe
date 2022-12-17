import React from 'react'

export const Navbar = () => {

  const logout = async()=>{
    localStorage.removeItem("user")

  }
  return (
    <div className='navbar'>
      <span className='logo'>MeTalk</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>John</span>
        <button onClick={()=>logout()}>logout</button>
      </div>
    </div>
  )
}
