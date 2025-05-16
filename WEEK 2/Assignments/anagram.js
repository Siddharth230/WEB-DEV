function isAnagram(str1, str2) {
  const sortedString1 = str1.sort();
  const sortedString2 = str2.sort();

  if (sortedString1 === sortedString2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("listen", "silent"));

module.exports = isAnagram;
