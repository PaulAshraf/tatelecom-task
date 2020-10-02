import React from 'react'

import { ReactComponent as HeadingLogo } from '../logos/MEGAKHEIR-Logo.svg'
import { ReactComponent as Profile } from '../logos/Vector.svg'

const Header = () => {
    return (
        <div className='top-bar'>
            <Profile className='logos-left'/>
            <HeadingLogo className='logos-center'/>
        </div>
    )
}

export default Header
