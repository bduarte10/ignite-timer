/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  /* border: 1px solid ${(props) => props.theme['orange-700']}; */
  height: 100vh;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};

  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 0;
  }
`
