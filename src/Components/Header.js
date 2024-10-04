import React from 'react'

function Header() {
    return (
        <div className=''>
            <img src='./logo.png' alt='logo-img' width={188.78} height={48} />
            <div className='flex flex-row'>
                <div>Home</div>
                <div>Programs</div>
                <div>Resources</div>
                <div>Pricing</div>
                <div>About Us</div>
                <div>Contact</div>
            </div>
            <div>
                SignUp
            </div>
        </div>
    )
}

export default Header