import styled from 'styled-components'

export const CopyrightContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  p {
    margin-right: 5px;
    font-size: 0.8rem;
  }
  a {
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
