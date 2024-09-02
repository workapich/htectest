
import styled from "styled-components";
import SearchInput from "react-search-input";

export const StyledSearchInput = styled(SearchInput)`
  input {
    padding: 12px 20px;
    font-size: 16px;
    border: 2px solid #D3D3D3;
    border-radius: 25px;
    width: 300px;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
      box-shadow: 0 0 10px rgba(125, 125, 125, 0.8);
    }
  }
`;

export const SuggestionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: -20px;
  width: 300px;
  border: 1px solid #ccc;
//   border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
    border-radius: 0 0 25px 25px;

`;

export const SuggestionItem = styled.li`
  padding: 10px 15px;

  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #D3D3D3;
    color: white;
    
  }
  &:first-child{
  padding: 30px 15px 10px 15px;
}
&:last-child{
       border-radius: 0 0 25px 25px;
} 

`;