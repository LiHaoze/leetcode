/**
 * @param {string} s
 * @return {number}
 */
// 最长不重复子串的长度
var lengthOfLongestSubstring = function(s) {
  var maxString = '';
  var tempArr = s.split('');

  for(var i = 0; i < tempArr.length; i++) {
    var maxArr = [];
    for(var j = i; j < tempArr.length; j++) {
      if (maxArr.indexOf(tempArr[j]) === -1) {
        maxArr.push(tempArr[j]);
      } else {
        break;
      }
    }
    if (maxString.length < maxArr.length) {
      maxString = maxArr.join('');
    }
  }

  return maxString.length;
};

var str1 = 'pwwkew';
console.log(lengthOfLongestSubstring(str1));