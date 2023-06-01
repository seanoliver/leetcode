

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

  if (!list1 || !list2) return list2 || list1;

  let mergedHead = new ListNode;
  let tail;


  while (((list1.length + list2.length) > mergedList.length)) {
    if (list1[i] && list2[j]) {
      if (list1[i] <= list2[j]) {
        mergedList.push(list1[i]);
        i++;
      } else {
        mergedList.push(list2[j]);
        j++
      }
    } else if (list1[i]) {
        mergedList.push(list1[i]);
        i++;
    } else {
        mergedList.push(list2[j]);
        j++;
    }
  }
  return mergedList;
};

const list1 = [1,2,4];
const list2 = [1,3,4];

console.log(mergeTwoLists(list1, list2));