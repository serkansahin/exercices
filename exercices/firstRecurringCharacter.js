function firstReccuringCharacter(tab) {
  if (tab === undefined || tab.length < 1) {
    return undefined
  }

  let tab2 = []

  for (let i=0; i <= tab.length; i++) {
    if (tab2.includes(tab[i])) {
      return tab[i]
    }
    tab2.push(tab[i])
  }
  return undefined
}

firstReccuringCharacter()
