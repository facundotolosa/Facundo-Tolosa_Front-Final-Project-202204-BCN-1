import styled from "styled-components";

const CreatePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 85px;
  width: 100%;

  .back-button {
    cursor: pointer;
    font-size: 20px;
    font-family: "Work Sans", sans-serif;
    color: white;
    background-color: #8594e4;
    border-radius: 5px;
    border: none;
    width: 170px;
    height: 30px;
    margin: 10px 0;
  }
`;

export default CreatePageContainer;
