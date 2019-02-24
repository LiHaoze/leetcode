/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  var carry = 0;
  var result = new ListNode(0);
  var curr = result;
  while (l1 || l2) {
    l1 = l1 || new ListNode(0);
    l2 = l2 || new ListNode(0);
    var val = l1.val + l2.val + carry;
    carry = Math.floor(val / 10);
    curr.next = new ListNode(val % 10)
    curr = curr.next;
    l1 = l1.next;
    l2 = l2.next;
    if (!l1 && !l2 && carry > 0) {
      curr.next = new ListNode(carry);
    }
  }
  return result.next;
};

var l1 = new ListNode(2);
var l2 = new ListNode(4);
var l3 = new ListNode(3);

var n1 = new ListNode(5);
var n2 = new ListNode(6);
var n3 = new ListNode(4);

l1.next = l2;
l2.next = l3;

n1.next = n2;
n2.next = n3;

console.log(addTwoNumbers(l1, n1));