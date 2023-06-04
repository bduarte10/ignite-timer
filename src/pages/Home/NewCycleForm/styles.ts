import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 1.5rem;
  }
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  border-radius: 8px;
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  &:focus {
    box-shadow: none;
    border-bottom: ${(props) => props.theme['gray-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
  @media (max-width: 768px) {
    height: 2rem;
  }
`
export const InputTask = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const MinutesAmount = styled(BaseInput)`
  text-align: center;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
  appearance: textfield;
  width: 4rem;
  @media (max-width: 768px) {
    flex: 1;
    width: 3rem;
    text-align: center;
  }
`
