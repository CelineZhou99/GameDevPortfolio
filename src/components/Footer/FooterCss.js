import styled from 'styled-components';

// general container
export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    color: white;
    font-family: "PixelRegular";
    background-color: #ff4fb9;
`;

export const Text = styled.h1`
    font-size: 24pt;
`;

export const IconContainer = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
`;

export const IconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Icon = styled.img`
    height: 80px;
`