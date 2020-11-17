import React, { ChangeEvent } from 'react'
import { Checkbox, Select } from 'components/atoms'
import { useQueryVariables, useCalling } from 'contexts'
import { useRefetch, useAgent } from 'lib'
import 'twin.macro'

export const Filters = React.memo(() => {
  const [variables] = useQueryVariables()
  const { containsDanime, containsNonPrime, minYear, maxYear } = variables

  const [calling] = useCalling()
  const { dispatch } = useRefetch()

  const agent = useAgent()

  // TODO: 変更したら5秒はdisabledにする

  const handleDanimeChange = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      ...variables,
      offset: 0,
      containsDanime: checked,
    })
  }

  const handleNonPrimeChange = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      ...variables,
      offset: 0,
      containsNonPrime: checked,
    })
  }

  const handlePeriodChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    const [_minYear, _maxYear] = value.split(',').map((x: string) => (x.length ? Number(x) : null))

    dispatch({
      ...variables,
      offset: 0,
      minYear: _minYear,
      maxYear: _maxYear,
    })
  }

  return (
    <>
      <div>
        <Checkbox
          id="containsDanime"
          onChange={handleDanimeChange}
          checked={containsDanime}
          disabled={calling}
          label="dアニメストア作品"
        />
      </div>
      <div tw="mt-5">
        <Checkbox
          id="containsNonPrime"
          onChange={handleNonPrimeChange}
          checked={containsNonPrime}
          disabled={calling}
          label="レンタル・購入作品"
        />
      </div>

      <div tw="mt-8">
        <Select
          onChange={handlePeriodChange}
          disabled={calling}
          value={`${minYear || ''},${maxYear || ''}`}
          agent={agent}
        >
          <option value=",">すべての年代</option>
          <option value="2020,">2020 &nbsp;-</option>
          <option value="2010,2019">2010 &nbsp;- &nbsp;2019</option>
          <option value="2000,2009">2000 &nbsp;- &nbsp;2009</option>
          <option value="1990,1999">1990 &nbsp;- &nbsp;1999</option>
          <option value="1980,1989">1980 &nbsp;- &nbsp;1989</option>
          <option value=",1979">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;1979</option>
        </Select>
      </div>
    </>
  )
})
