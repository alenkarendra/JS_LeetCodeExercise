function midV(head) {
  let isOdd = head.length % 2 == 1;
  let midValue = 0;

  if (isOdd) {
    midValue = Math.floor(head.length / 2);
  } else {
    midValue = head.length / 2;
  }

  return head.slice(midValue);
}

let Arr = [1, 2, 3, 4, 5];

console.log(midV(Arr));

// ====================================================================
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  // Fast pointer bergerak 2 langkah, slow pointer bergerak 1 langkah
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Ubah head menjadi node tengah
  head = slow;

  return head; // Mengembalikan node tengah dan semua node setelahnya
};
