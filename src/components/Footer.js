import React from 'react'

import { ReactComponent as Facebook } from '../logos/Facebook.svg'
import { ReactComponent as Instagram } from '../logos/instagram.svg'
import { ReactComponent as Logo } from '../logos/TA.svg'

const Footer = () => {
    return (
        <footer>
                <a href='https://www.tatelecom.com/' className='logos-left' ><Logo /></a>
                <a href='https://www.facebook.com/TAtelecom/' className='logos' ><Facebook /></a>
                <a href='https://www.instagram.com/tatelecom/' className='logos'><Instagram /></a>
        </footer>
    )
}

export default Footer
