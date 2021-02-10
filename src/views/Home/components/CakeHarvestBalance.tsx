import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import { usePriceCakeBusd } from 'state/hooks'
import styled from 'styled-components'
import CardValue from './CardValue'

const CakeHarvestBalance = () => {
  const TranslateString = useI18n()
  const { account } = useWallet()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)

  const earningsDollar = new BigNumber(earningsSum).multipliedBy(usePriceCakeBusd()).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '60px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <Wrapper>
      <CardValue value={earningsSum} />
      <CardValue value={earningsDollar} fontSize="24px" prefix="$" />
    </Wrapper>
  )
}

export default CakeHarvestBalance

const Wrapper = styled.div`
 > div:nth-child(2){
  margin-bottom: 16px;
 }
}
`
