import styled from "styled-components"

const NavigationBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${({direction}) => direction || 'column'};

    margin: 20px 0 20px 0;

`
export default NavigationBox