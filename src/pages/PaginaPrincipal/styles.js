import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 20px;
    margin: 10px;
  }
`;

export const Button = styled.button`
  margin: 10px;
  width: 200px;
  padding: 10px;
  font-size: 30px;
  background: #e6fffa;
  color: #2e656a;
  border: 0;
  border-radius: 10px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${shade(0.2, '#e6fffa')};
  }
`;
