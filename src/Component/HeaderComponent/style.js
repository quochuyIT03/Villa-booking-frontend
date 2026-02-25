import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px; 
    align-items: center;
    gap: 16px; 
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
    height: 100px;
    
`;

export const WrapperHeader1 = styled(Row)`
    padding: 10px 120px; 
    align-items: center;
    gap: 16px; 
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
    height: 100px;
    
`;
export const WrapperTextHeader = styled.span`
    font-size: 26px;
    color: #000;
    font-weight: bold; 
    text-align: left;
`;

export const WrapperTextHeader1 = styled.span`
    font-size: 14px;
    color: #000;
    text-align: left;
    
`;

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    gap: 10px;
    font-size: 14px;
`;

export const WrapperTextHeaderSmall = styled.span`
    font-size: 20px; 
    color: #000;
    font-weight: 500;
`;
export const WrapperTextHeaderSmallActive = styled(WrapperTextHeaderSmall)`
  font-weight: bold;
  color:rgb(243, 85, 37);
`;


export const WrapperIconHeader = styled.span`
    font-size: 30px; 
    color: #000;
    white-space: nowrap;
`;

export const WrapperContentPopup = styled.p`
    cursor: pointer; 
    &:hover {
        color: #195f07;
        font-weight: 500;
    }
`;

export const WrapperContactInfo = styled.div`
    width: 100%;
    color: #000;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color:#d7d2d2;
    margin: 10px 0;
`;
export const WrapperNavigation = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    &.sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

    .sticky + .content {
        padding-top: 102px;
    }
`;