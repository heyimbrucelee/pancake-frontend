import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js';
import styled from 'styled-components'
import CardValue from './CardValue'

const CakeWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const claimAmountDollar = new BigNumber(claimAmount).multipliedBy(usePriceCakeBusd()).toNumber()

  return (
    <Wrapper>
      <CardValue value={getBalanceNumber(claimAmount)} />
      <CardValue value={claimAmountDollar} fontSize="24px" prefix="$" />
    </Wrapper>
  )
}

export default CakeWinnings

const Wrapper = styled.div`
 > div:nth-child(2){
  margin-bottom: 16px;
 }
}
`
