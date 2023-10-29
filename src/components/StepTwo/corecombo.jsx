import styled from 'styled-components'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { SelectedCores } from '../../recoil/Atoms'

const CoreComboBox = (props) => {
  const [selectedCore, setSelectedCore] = useState('')
  const selectedCores = useRecoilValue(SelectedCores)
  const handleSelectChange = (e) => {
    setSelectedCore(e.target.value)
  }

  return (
    <ComboBoxContainer>
      <Select value={selectedCore} onChange={handleSelectChange}>
        {props.cores.map((core, i) => (
          <Option key={i} value={core} selected={selectedCores[i]}>
            {core}
          </Option>
        ))}
      </Select>
    </ComboBoxContainer>
  )
}

const ComboBoxContainer = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px solid #ccc;
  width: 450px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 0px;
  background-color: #fff;
  outline: none;
  cursor: pointer;
`;

const Option = styled.option`
  ${(props) => (props.selected) ? '' : 'display: none;'}
`
export default CoreComboBox