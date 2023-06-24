/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  overflow: hidden;
  padding: 2rem 5.5rem;
  min-height: 100vh;

  background: ${(props) => props.theme['gray-800']};

  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 0;
  }
`
