
import styled from "styled-components"

function Button({children, click}) {

    return (
        <ButtonWrapper onClick={click}>
            {children}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    background-color: white;
    padding: 12px 24px;
    color: black;
    border: none;
    border-radius: 4px;

`
export default Button