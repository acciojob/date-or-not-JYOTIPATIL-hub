function isDate(input) {
  // Check if the input is a Date object and it's valid
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If input is a string or a number, try to parse it to a Date
  const parsedDate = new Date(input);
  return !isNaN(parsedDate);
}

// Examples
console.log(isDate(new Date()));           // true
console.log(isDate("2023-08-11"));         // true
console.log(isDate("not a date"));         // false
console.log(isDate(1699651200000));        // true (valid timestamp)
console.log(isDate({}));                   // false (object that isn't a Date)
