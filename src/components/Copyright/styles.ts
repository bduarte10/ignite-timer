import styled from 'styled-components'

export const CopyrightContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-right: 5px;
  }
  a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
