import styled from 'styled-components'

export const CountdownContainer = styled.div`
  position: relative;
  font-family: 'Roboto Mono', monospace;

  border-radius: 50%;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  height: 20rem;
  font-size: 3.2rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    padding: 1rem 0.5rem;
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 4rem;
    width: 15rem;
    height: 15rem;
    span {
      padding: 1.5rem 0.5rem;
    }
  }
`
export const Separator = styled.div`
  padding: 0;
  color: ${(props) => props.theme['gray-100']};
  width: 1rem;

  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 2rem;
    padding: 1.5rem 0;
  }
`
export const ProgressCircle = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    fill: none;
    stroke: ${(props) => props.theme.lightViolet};
    stroke-width: 4;
    stroke-dashoffset: 0;
  }
`
