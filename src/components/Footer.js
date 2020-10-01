import React from 'react'

import { ReactComponent as Facebook } from '../logos/Facebook.svg'
import { ReactComponent as Instagram } from '../logos/instagram.svg'
import { ReactComponent as Logo } from '../logos/TA.svg'

const Footer = () => {
    return (
        <footer>
                <Logo className='logos-left'/>
                <Facebook className='logos'/>
                <Instagram className='logos'/>
        </footer>
    )
}

export default Footer
