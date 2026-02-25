import styled from "styled-components";

export const WrapperTypeProduct = styled.div`
    display: flex; 
    align-items: center; 
    gap: 24px; 
    justify-content: flex-start; 
    height: 44px;
    & > * {
        text-decoration: none;
        font-weight: 500;
        position: relative;
        outline: none !important;
        text-transform: uppercase;
        transition: color 0.2s;
        margin: 12px 0;

        &:hover,
        &:focus {
            color: #195f07;
        }

        &:after {
            content: "";
            background-color: black;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 0;
            transition: width 0.2s;
        }

        &:hover::after,
        &:focus::after {
            background-color: #195f07;
            width: 100%;
        }
    }
`


