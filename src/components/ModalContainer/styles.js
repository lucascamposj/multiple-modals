import styled, {keyframes} from 'styled-components';

const load = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0 auto;
  background-color:rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  animation: ${load} 0.5s;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  background: transparent;
`;

