import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media screen {
    padding-bottom: 0rem;
  }
  a {
    text-decoration: none;
    background-image: linear-gradient(to right, #feb7b7, #db94ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;
    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-300']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['gray-300']};
      }
      &.active {
        color: ${(props) => props.theme.lightViolet};
      }
    }
  }
`
