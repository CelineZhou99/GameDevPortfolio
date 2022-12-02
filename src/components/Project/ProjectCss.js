import styled from 'styled-components';

// general container
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    color: white;
    text-align: left;
    margin-bottom: 80px;
    font-family: "PixelBold";
`;

// container containing the gif and description
export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TitleText = styled.h2`
    font-size: 24pt;
`;

export const BodyText = styled.p`
    font-size: 12pt;
    font-family: "PixelRegular";
`;

// container containing the serial number of project
export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
`;

export const Number = styled.h3`
    font-size: 64pt;
`