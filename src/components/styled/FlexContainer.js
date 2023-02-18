import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${({justify}) => justify || 'center' };
    align-items: ${({align}) => align || 'center' };
    flex-direction: ${({direction}) => direction || 'row' };
`
export default FlexContainer