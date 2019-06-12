function reverse(str) {
  if (!str.length) return "";
  let endIndex = str.length - 1;
  let strWithoutEndChar = str.slice(0, str.length - 1);

  return str[endIndex].concat(reverse(strWithoutEndChar));
}

console.log(reverse("nicole bonilla romero"));
