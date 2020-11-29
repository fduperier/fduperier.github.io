---

---

computeCupOfCoffee = (startDate, nbOfCoffeePerDay, elementId) ->
  DAY = 1000 * 60 * 60 * 24
  TODAY = new Date()
  START = new Date(startDate)

  timeBetweenInMillis = Math.abs(TODAY - START)
  timeBetweenInDays = Math.floor(timeBetweenInMillis / DAY)
  cupOfCoffeePerDay = timeBetweenInDays * nbOfCoffeePerDay

  document.getElementById(elementId).innerText = cupOfCoffeePerDay;


root = exports ? this
root.computeCupOfCoffee = computeCupOfCoffee
