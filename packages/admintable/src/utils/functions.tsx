const handleObjectSplit = (a: any) => {
  const unsplit: any = {};
  const split: any = {};
  let splitValue = '';
  Object.keys(a).forEach((key: string) => {
    if (key.split('.')[1]) {
      // eslint-disable-next-line prefer-destructuring
      splitValue = key.split('.')[0];
      split[key.split('.')[1]] = a[key];
    } else {
      unsplit[key] = a[key];
    }
  });

  return { splitValue, unsplit, split };
};

export default handleObjectSplit;
