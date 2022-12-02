import styled from 'styled-components';

// general container
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 85%;
    color: white;
    font-family: "PixelRegular";
    text-align: left;
`;

export const ContactsItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
`;

export const Icon = styled.img`
    width: 20%;
`;

export const ContactItem = styled.p`
    font-size: 24pt;
`;