import styled from "styled-components";

export type CardIconDropDownMenuProps = {
  $left: number;
  $top: number;
};

export const CardIconDropDownMenu = styled.div<CardIconDropDownMenuProps>`
  width: 100%;
  max-width: 270px;
  height: auto;
  padding: 25px 0px;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 17%);
  border-radius: 8px;
  -webkit-border-radius: 8px;
  background-color: #ffffff;
  position: fixed;
  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;
`;

export const CardIconDropDownMenuList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const CardIconDropDownMenuListItem = styled.div`
  width: 100%;
  height: auto;
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  a,
  button {
    width: 100% !important;
    border-radius: 0px !important;
    -webkit-border-radius: 0px !important;
    transition: unset !important;
    padding: 10px 16px 13px !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #111111;

    * {
      color: inherit;
    }

    &:hover {
      background-color: #ebebeb !important;
    }

    &:active {
      background-color: #e0e0e0 !important;
    }
  }
`;

export const CardOptionIconWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  padding-right: 8px;
`;

export const CardOptionLabelWrapper = styled.div`
  width: 100%;
  padding: 0px 8px 0px 0px;
  margin-top: +3px;
  display: flex;
  justify-content: flex-start;
`;
