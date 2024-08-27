import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: 0.375rem;
  display: block;
  -webkit-border-radius: 0.375rem;
  padding: 18px 12px;
  border-width: 1px;
  border-style: solid;
  margin-bottom: 1rem;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: block;
  padding-bottom: 22px;
`

export const Title = styled.h5`
  font-weight: 600;
  font-size: 19px;
`

export const SubTitle = styled.h6`
  font-size: 12px;
  font-weight: 300;
  display: block;
  padding-top: 8px;
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  span {
    font-size: 12px;
    font-weight: 600;
    color: #738ab9;
    display: block;
  }
`
