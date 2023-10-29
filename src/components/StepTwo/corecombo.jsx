import styled from 'styled-components'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { SelectedCores } from '../../recoil/Atoms'

const CoreComboBox = (props) => {
  const [selectedCore, setSelectedCore] = useState('')
  const SCores = useRecoilValue(SelectedCores)
  const handleSelectChange = (e) => {
    setSelectedCore(e.target.value)
  }

  return (
    <ComboBoxContainer>
      <Select value={selectedCore} onChange={handleSelectChange}>
        {props.cores.map((core, i) => (
          (SCores[i])?
            <option key={i} value={core}>
              {core}
            </option>
          :
            <></>
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

export default CoreComboBox