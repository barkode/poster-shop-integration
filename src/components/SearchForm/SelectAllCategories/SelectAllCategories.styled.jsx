import styled from '@emotion/styled';

export const SelectAllCategoriesStyled = styled.div`
    .hero__search__categories {
        cursor: pointer;
        position: relative;
        padding: 15px 0;
        font-size: 18px;
        font-weight: 700;
        color: #000;
        border-bottom: 1px solid #ebebeb;
    }
    &:after {
        position: absolute;
        right: 0;
        top: 14px;
        height: 20px;
        width: 1px;
        background: #000;
        opacity: 0.1;
        content: '';
    }
    `;

