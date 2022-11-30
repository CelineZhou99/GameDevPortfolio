import styled, { css } from 'styled-components';

export const Header = styled.header`
    height: 112px;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 8px 8px -4px #ff4fb9;
`;

export const RowParent = styled.div`
    display: flex;
    justify-content: space-between;
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
    font-family: PixelRegular;
    cursor: pointer;
    transition: color .3s ease-in-out;

    &:hover {
        color: #ff4fb9;
    }
`