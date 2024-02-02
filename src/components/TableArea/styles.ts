import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
`;

export const TableBodyRow = styled.tr`
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const TableBodyColumn = styled.td`
  padding: 10px 0;
`;

export const CategoryColor = styled.div<{ color: string }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
`;

export const Category = styled.div`
  font-weight: bold;
`;

export const Value = styled.div<{ type: string }>`
  color: ${props => props.type === 'expense' ? '#ff0000' : '#00ff00'};
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

