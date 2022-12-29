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

    @media (max-width: 800px) {
        font-size: 18pt;
    }

    @media (max-width: 400px) {
        font-size: 16pt;
    }

    @media (max-width: 350px) {
        font-size: 15pt;
    }
`;

export const IconContainer = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 140px;
    }

    @media (max-width: 400px) {
        width: 130px;
    }
`;

export const IconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Icon = styled.img`
    height: 60px;

    @media (max-width: 600px) {
        height: 50px;
    }
`