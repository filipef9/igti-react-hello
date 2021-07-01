export const getAgeFrom = (dataNascimento) => {
  const birthdate = {
    year: parseInt(dataNascimento.split('-')[0]),
    month: parseInt(dataNascimento.split('-')[1]),
    day: parseInt(dataNascimento.split('-')[2])
  };

  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  };

  const age = today.year - birthdate.year;

  if (today.month < birthdate.month) {
    return age - 1;
  }

  if (
    (today.month === birthdate.month)
    && (today.day < birthdate.day)
  ) {
    return age - 1;
  }

  return age;
}