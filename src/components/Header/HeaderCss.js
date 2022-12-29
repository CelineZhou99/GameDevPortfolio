import styled from 'styled-components';

export const Container = styled.header`
    height: 112px;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 8px 8px -4px #ff4fb9;
    position: fixed;
    width: 100%;
    z-index: 2;

    @media (max-width: 800px) {
        height: 90px;
    }
`;

export const RowParent = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
        display: none;
    }
`

export const RowChild = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const LinkText = styled.a`
    font-size: 20pt;
    color: white;
    margin-left: 20px;
    margin-right: 20px;
    font-family: ${props => props.notLink ? 'PixelBold' : 'PixelRegular'};
    cursor: ${props => props.notLink ? 'Default' : 'Pointer'};
    transition: color .3s ease-in-out;

    &:hover {
        color: #ff4fb9;
    }

    @media (max-width: 800px) {
        font-size: 18pt;
    }

    @media (max-width: 600px) {
        font-size: 16pt;
    }
`

export const MobileParent = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        justify-content: flex-start;
    }
`;