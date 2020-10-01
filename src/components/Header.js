import React from 'react'

import { ReactComponent as HeadingLogo } from '../logos/MEGAKHEIR-Logo.svg'
import { ReactComponent as Profile } from '../logos/Vector.svg'

const Header = () => {
    return (
        <header>
            <Profile className='logos-left'/>
            <HeadingLogo className='logos-center'/>
        </header>
    )
}

export default Header
