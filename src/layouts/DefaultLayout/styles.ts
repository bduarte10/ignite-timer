/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto 2.5rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: calc(100vh - 5rem);
    width: 100%;
    border-radius: 0;
    margin: 0 auto 1.5rem;
    padding: 2.5rem 1.5rem;
  }
`
