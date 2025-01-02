import styled from "styled-components";

const GangHwa = () => {
  

  return (
    <Container>
      <Input
        type="text"
        placeholder="값을 입력하세요"
      />
      <Button>제출</Button>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;
  
export default GangHwa