import styled from "styled-components";

// whole container
export const Container = styled.div`
    background-color: #FFC79C;
    border: solid 10px #B8620E;
    border-radius: 10px;
    width: 85%;
    height: 450px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 5px;
    margin-bottom: 50px;
    color: #531403;
    font-size: 20pt;
    font-family: PixelRegular;
`;

// left container
export const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
`;

export const Picture = styled.img`
    width: 60%;
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

// middle container
export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    border-left: solid 3px #C29878;
    border-right: solid 3px #C29878;
    padding-left: 2%;
    width: 35%;
`;

export const StatsItemsContainer = styled.div`
    display: flex;
    text-align: left;
`;

export const StatsLevel = styled.img`
    width: 35%;
    margin-left: 10px;
`;

// right container
export const HobbiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 1%;
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
`;