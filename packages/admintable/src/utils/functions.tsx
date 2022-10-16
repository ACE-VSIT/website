export const handleObjectSplit = (a: any) => {
  const unsplit: any = {}
  const split: any = {}
  let splitValue: string = ''
  Object.keys(a).forEach((key: string) => {
    console.log(key)
    if (key.split('.')[1]) {
      splitValue = key.split('.')[0]
      split[key.split('.')[1]] = a[key]
    } else {
      unsplit[key] = a[key]
    }
  })

  return { splitValue, unsplit, split }
}

export const camel2title = (camelCase: string) => {
  // no side-effects
  return (
    camelCase
      // inject space before the upper case letters
      .replace(/([A-Z])/g, function (match) {
        return ' ' + match
      })
      // replace first char with upper case
      .replace(/^./, function (match) {
        return match.toUpperCase()
      })
  )
}
