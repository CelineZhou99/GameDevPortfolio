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

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

// container containing the gif and description
export const VideoContainer = styled.div`
    display: block;
    position: relative;
    width: 50%;
    height: 400px;
    z-index: 1;

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        height: 300px;
    }

    @media (max-width: 400px) {
        height: 200px;
    }
`;

export const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const TitleText = styled.h2`
    font-size: 24pt;

    @media (max-width: 1000px) {
        font-size: 20pt;
    }

    @media (max-width: 800px) {
        font-size: 19pt;
    }

    @media (max-width: 600px) {
        font-size: 18pt;
    }
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

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Number = styled.h3`
    font-size: 58pt;
    margin-top: 30px;
    margin-bottom: 20px;
    align-self: center;

    @media (max-width: 1000px) {
        font-size: 40pt;
        margin-top: 25px;
        margin-bottom: 15px;
    }

    @media (max-width: 800px) {
        font-size: 36pt;
    }

    @media (max-width: 600px) {
        font-size: 32pt;
    }
`
export const GitLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const GitIcon = styled.img`
    height: 45px;

    @media (max-width: 600px) {
        height: 40px;
    }
`