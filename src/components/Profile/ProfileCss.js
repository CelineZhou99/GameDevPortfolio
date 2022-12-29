import styled from "styled-components";

// whole container
export const Container = styled.div`
    background-color: #FFC79C;
    border: solid 10px #B8620E;
    border-radius: 10px;
    width: 82%;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    margin-top: 5px;
    margin-bottom: 50px;
    color: #531403;
    font-size: 20pt;
    font-family: PixelRegular;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        font-size: 20pt;
        width: 80%
    }

    @media (max-width: 800px) {
        font-size: 18pt;
    }

    @media (max-width: 600px) {
        font-size: 16pt;
        width: 76%;
    }

    @media (max-width: 400px) {
        font-size: 14pt;
    }
`;

// left container
export const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;

    @media (max-width: 1000px) {
        width: 80%;
    }
`;

export const Picture = styled.img`
    width: 65%;
    border: solid 10px #B8620E;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const NameTag = styled.div`
    border: solid 10px #B8620E;
    border-radius: 10px;
    background-color: #FED283;
    text-align: center;
    padding: 10px;
    width: 60%;
`;

// middle container
export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    border-left: solid 3px #C29878;
    border-right: solid 3px #C29878;
    padding-left: 2%;
    width: 45%;

    @media (max-width: 1000px) {
        width: 95%;
        border-left: none;
        border-right: none;
        border-top: solid 3px #C29878;
        border-bottom: solid 3px #C29878;
        margin-top: 5%;
        margin-bottom: 5%;
        padding: 5%;
    }
`;

export const StatsItemsContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
`;

export const StatsLevel = styled.img`
    width: 30%;
    margin-left: 10px;

    @media (max-width: 600px) {
        width: 35%;
    }
`;

// right container
export const HobbiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 1%;
    width: 30%;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const HobbiesItemsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
`;

export const HobbiesItem = styled.img`
    margin: 10px; 
    width: 30%;

     @media (max-width: 1000px) {
        width: 20%;
    }
`;