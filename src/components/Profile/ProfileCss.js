import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFC79C;
    border: solid 10px #B8620E;
    border-radius: 10px;
    width: 85%;
    height: 450px;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    color: #531403;
    font-size: 20pt;
    font-family: PixelRegular;
`;

export const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const HobbiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const HobbiesItemsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Picture = styled.img`
    width: 48%;
    height: 70%;
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
`;