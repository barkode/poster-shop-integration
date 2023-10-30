import styled from "@emotion/styled";

export const MobileMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #fff;
    `;
    
    export const MobileContainer = styled.div`
    @media screen and (min-width: 992px) {
        display:none;
    }
    `;
