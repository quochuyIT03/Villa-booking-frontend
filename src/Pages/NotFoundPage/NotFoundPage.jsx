import React from 'react'
import { CenteredDiv, WrapperContext, WrapperTitle } from './style'


const NotFoundPage = () => {
    return (
        <CenteredDiv>

            <WrapperTitle>
                Oh No!!
            </WrapperTitle>
            <WrapperContext>
                The page you looking for many have been moved, deleted, or possibly never existed.
            </WrapperContext>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/024/217/744/small_2x/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.png" alt='' style={{}} />
        </CenteredDiv>
    )
}

export default NotFoundPage
