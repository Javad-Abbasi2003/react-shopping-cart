const shorten = (title) => {
  const splited = title.split(" ");
  const shorted = `${splited[0]} ${splited[1]} ${splited[2]}`;
  return shorted;
};

export { shorten };
