import { useState } from 'react';
import styled from 'styled-components';

// 샘플 데이터
const options = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
];

const ComboBox = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <ComboBoxContainer>
      <Select value={selectedOption} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </ComboBoxContainer>
  );
}

const ComboBoxContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 450px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  outline: none;
  cursor: pointer;
`;

export default ComboBox;