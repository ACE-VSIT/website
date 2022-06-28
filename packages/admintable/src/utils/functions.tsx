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
