import { createContext, useState, useContext, useMemo, useEffect } from 'react'
import { pricePerItem } from '../constants'
import { formatCurrency } from '../utilities'

const OrderDetails = createContext()

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails)

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    )
  }

  return context
}

export function OrderDetailsProvider(props) {
    const [optionCounts, setOptionCounts] = useState({
      scoops: new Map(),
      toppings: new Map(),
    })

    const zeroCurrency = formatCurrency(0)

    const [totals, setTotals] = useState({
      scoops: zeroCurrency,
      toppings: zeroCurrency,
      grandTotal: zeroCurrency,
    })
  
    useEffect(() => {
      const scoopsSubtotal = calculateSubtotal("scoops", optionCounts)
      const toppingsSubtotal = calculateSubtotal("toppings", optionCounts)
      const grandTotal = scoopsSubtotal + toppingsSubtotal
      setTotals({
        scoops: formatCurrency(scoopsSubtotal),
        toppings: formatCurrency(toppingsSubtotal),
        grandTotal: formatCurrency(grandTotal),
      })
    }, [optionCounts])
  
    const value = useMemo(() => {
      function updateItemCount(itemName, newItemCount, optionType) {
        const newOptionCounts = { ...optionCounts }
  
        // update option count for this item with the new value
        const optionCountsMap = optionCounts[optionType]
        optionCountsMap.set(itemName, parseInt(newItemCount))
  
        setOptionCounts(newOptionCounts)
      }
      // getter: object containing option counts for scoops and toppings, subtotals and totals
      // setter: updateOptionCount
      return [{ ...optionCounts}, updateItemCount]
    }, [])

    return <OrderDetailsProvider value={value} {...props} />
  }