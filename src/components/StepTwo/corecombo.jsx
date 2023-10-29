import styled from 'styled-components'
import { useState } from 'react'

const CoreComboBox = (props) => {
  const [selectedJob, setSelectedJob] = useState(props.jobs[1])
  const handleSelectChange = (e) => {
    setSelectedJob(e.target.value)
  }

  return (
    <ComboBoxContainer>
      <Select value={selectedJob} onChange={handleSelectChange}>
        {props.jobs.map((job, i) => (
          <option key={i} value={job}>
            {job}
          </option>
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