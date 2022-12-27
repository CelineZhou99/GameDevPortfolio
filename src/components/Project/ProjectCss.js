import styled from 'styled-components';

// general container
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    color: white;
    text-align: left;
    margin-bottom: 150px;
    font-family: "PixelBold";
`;

// container containing the gif and description
export const VideoContainer = styled.div`
    display: flex;
    justify-content: ${props => props.flexSide ?? props.flexSide}
    width: 60%;
    height: 100%;
`;

export const Iframe = styled.iframe`
    width: 900px;
    height: 500px;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const TitleText = styled.h2`
    font-size: 24pt;
`;

export const BodyText = styled.p`
    font-size: 12pt;
    font-family: "PixelRegular";
`;

// container containing the description of project
export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 40%;
`;

export const Number = styled.h3`
    font-size: 58pt;
    margin: 30px;
    align-self: center;
`
export const GitLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const GitIcon = styled.img`
    height: 80px;
`