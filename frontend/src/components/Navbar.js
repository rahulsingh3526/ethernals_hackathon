import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <div className='wrapper'>
        <nav>
          <ul class="container">
            <li>Home</li>
            <li>About</li>
            <li><button>Connect Wallet</button></li>
          </ul>
        </nav>

      </div>
    </>
  )
}

export { Navbar };