import React, { FC, useEffect, useState } from 'react'

import { Input } from '../../../'
import * as Styled from './TableBody.styled'

const TableBody: FC<any> = ({
  callback,
  dataItems = [],
  rowsMax,
  multiSelect,
  hideInput,
  isSelectedDefault
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedIds, setSelectedIds] = useState<Array<number>>([])

  const isSelectedItem = (id): boolean => {
    if(multiSelect) {
      return selectedIds.includes(id)
    }
    return id === selectedId
  }

  useEffect(() => {
    if(isSelectedDefault) {
      return setSelectedId(0)
    }


    console.log('dataItems', dataItems)

    setSelectedId(null)
    setSelectedIds([])
  }, [dataItems])

  const onClickItem = (id): void => {
    if(multiSelect) {
      if (selectedIds.includes(id)) {
        const clearedArr = selectedIds.filter((itemId) => !(itemId === id))
        return setSelectedIds(clearedArr)
      }

      return setSelectedIds([...selectedIds, id])
    }

    setSelectedId(id)
  }

  useEffect(() => {
    if (callback) {
      callback(Boolean(selectedId || selectedIds.length))
    }
  }, [callback, selectedId, selectedIds])

  if(!dataItems.length) {
    return <div>Loading...</div>
  }

  return (
    <Styled.TableBody>
      {dataItems
        .map(({baseAsset, name, abbreviation, value, isSelected}, id) => {
          if (isSelectedItem(id)) {
            return (
              <Styled.ItemSelected onClick={() => onClickItem(id)} key={id}>
                <Styled.WrapName>
                  <Styled.CurrencyName>{name || abbreviation}</Styled.CurrencyName>
                  <Styled.CurrencyAbbreviation>{abbreviation || baseAsset}</Styled.CurrencyAbbreviation>
                </Styled.WrapName>

                {hideInput ?
                  <Styled.CurrencyValue>
                    { (Math.random() * 10).toFixed(6) }
                  </Styled.CurrencyValue>:
                  <Input
                    isAutoFocus
                    defaultValue={1}
                    placeholder='Enter a value'
                    type='number'
                    afterContent={abbreviation}
                  />
                }
              </Styled.ItemSelected>
            )
          }

          return (
            <Styled.Item onClick={() => onClickItem(id)} key={id}>
              <Styled.WrapName>
                {(name || abbreviation) && <Styled.CurrencyName>{name || abbreviation}</Styled.CurrencyName>}
                {(baseAsset || abbreviation) && <Styled.CurrencyAbbreviation>{abbreviation || baseAsset}</Styled.CurrencyAbbreviation>}
              </Styled.WrapName>
            </Styled.Item>
          )
        })}
    </Styled.TableBody>
  )
}

export default TableBody