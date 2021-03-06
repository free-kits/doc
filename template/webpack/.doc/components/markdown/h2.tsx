import React from 'react'
import { useLinkTitle } from './useLink';
import './styles/h2.less';

export default ({
    children
}) => useLinkTitle(
    <h2 id={children} className='md-h2'>
        {children}
    </h2>
)
