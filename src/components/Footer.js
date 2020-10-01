import React from 'react'

import { ReactComponent as Facebook } from '../logos/Facebook.svg'
import { ReactComponent as Instagram } from '../logos/instagram.svg'
import { ReactComponent as Logo } from '../logos/Powered-by.svg'

const Footer = () => {
    return (
        <footer>
                <Logo className='logos-left'/>
                <Facebook className='logos-right'/>
                <Instagram className='logos-right'/>
        </footer>
    )
}

export default Footer
