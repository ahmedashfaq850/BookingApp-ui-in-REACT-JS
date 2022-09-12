import './Navbar.style.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='logo'>Fast Booking</div>
            <div className='nav-btns'>
                <button className='navbtn navbtn1'>Register</button>
                <button className='navbtn navbtn2'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar