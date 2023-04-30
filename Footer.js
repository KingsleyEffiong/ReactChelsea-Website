import React from 'react'
import Button from './Button'
import './Footer.css'


function Footer() {
  return (

        <div className='footer-container'>
            <section className='footer-subsciption'>
                <p className='footer-subsciption-heading'>
                    Join Our Newsletter to keep you up to date about our Blog Post
                </p>
                <p className='footer-subsciption-text'>
                    You can Unsubscribed at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'></input>
                        <Button buttonStyle='btn--primary'>Subscribe</Button>
                    </form>
                </div>
            </section>
            </div>
           
  )
}

export default Footer