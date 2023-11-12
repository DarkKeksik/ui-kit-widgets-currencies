import styled from 'styled-components'

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  background: #1d2634;
`

export const DescriptionTitle = styled.p`
  text-align: center;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 18px;
`

export const DescriptionSubtitle = styled.p`
  font-size: 12px;
  font-weight: normal;
`

export const DescriptionItems = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: 1px;
`

export const DescriptionCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: .1rem;
`

export const DescriptionItem = styled.p`
  font-size: .875rem;
`

export const RateChange = styled.p<{isRising: boolean}>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({isRising}) => isRising ? '#26ad8d' : '#fe7079'};
  
  // @TODO Can't compile, guess problem with swc, probable need make config for styled files
  // &:before {
  //   content: ${({isRising}) => isRising ? '+' : '-'};
  // }
`

export const WrapCharts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  background: #2b3947;
`

export const TitleCharts = styled.p``