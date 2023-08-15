import styled from 'styled-components';

export const DeleteButton = styled.button`
  cursor: pointer;
  min-width: 70px;
  ${'' /* height: 22px; */}
`;
export const List = styled.ul`
  padding-left: 0px;
  width: 360px;
  li:nth-child(even) {
    background-color: #f0f0f0;
  }
`;
export const ListItem = styled.li`
  margin-bottom: 5px;
  list-style: none;
`;
export const P = styled.p`
  margin: 0px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;
