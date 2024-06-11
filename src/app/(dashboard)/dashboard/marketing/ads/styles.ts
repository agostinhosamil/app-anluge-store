import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100% + 10px);
  height: auto;
  display: block;
  margin-left: -10px;
`

export const AdvertisingListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`

export const AdvertisingListItem = styled.div`
  width: 50%;
  height: auto;
  display: inline-flex;
  padding: 10px;
`
