import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  color: #4e4e4e;
  padding: 40px 8px;
`

export const CategoryListWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  &:before {
    content: '';
    display: block;
    height: 100%;
    width: 60px;
    background-image: linear-gradient(89deg, #ffffff, transparent);
    position: absolute;
    left: -3px;
    top: 0px;
    bottom: 0px;
    z-index: 1;
  }

  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 60px;
    background-image: linear-gradient(270deg, #ffffff, transparent);
    position: absolute;
    right: -3px;
    top: 0px;
    bottom: 0px;
  }
`

export const CategoryList = styled.ul`
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
`

export const ProductsList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const AdvertisingPanelContainer = styled.div`
  width: 100%;
  display: block;
  padding: 20px 8px 10px;
`
