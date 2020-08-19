import styled, { css, keyframes } from 'styled-components';

const load = keyframes`
  from{
    opacity: 0;
    transform: translateY(-100px) scale(1.2);
  }
  to{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const close = keyframes` 
  from{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to{
    opacity: 0;
    transform: translateY(-100px) scale(1.2);
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 170px;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  background: #e6fffa;
  color: #2e656a;

  ${props => !props.close ?
    css`
      animation-delay: 0.2s;
      animation: ${load} 0.5s;
    ` :
    css`
      animation-delay: 0.2s;
      animation: ${close} 0.5s;
    `
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    strong{
      width: 40px;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;

export const NewModalButton = styled.button`
  opacity: 0.6;
  margin: auto 0;
  border: 0;
  background: transparent;
  color: inherit;
  margin-top: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 19px;
  opacity: 0.6;
  border: 0;
  background: transparent;
  color: inherit;
`;