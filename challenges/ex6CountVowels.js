const countVouels = (anyString) => {
  const arrayReturnedByMatch = anyString.match(/[AaEeIiOoUu]/g);
  console.log(arrayReturnedByMatch);
  const response = arrayReturnedByMatch
    ? arrayReturnedByMatch.length
    : "null: any vowel was found";
  console.log(response);
  return response;
};

export { countVouels };
