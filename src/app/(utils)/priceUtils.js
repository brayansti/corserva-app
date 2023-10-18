const getPlansPrice = (plans) => (
  plans.filter(plan => plan.selected)[0].value
)

const getAddOnsPrice = (addOns) => {
  return addOns.reduce((total, item) => {
    if (item.selected) {
      total += item.value;
    }
    return total;
  }, 0);
}

const getFinalPrice = (currentState => {
  const {addOns, plans} = currentState
  const plansPrice = getPlansPrice(plans)
  const addOnsPrice = getAddOnsPrice(addOns)
  const totalPrice = plansPrice + addOnsPrice

  return currentState.suscriptionYearly ? (totalPrice * 12) : totalPrice
})

export {
  getFinalPrice
}