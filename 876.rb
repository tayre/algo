=begin
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
=end

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def middle_node(head)
    result = []

    while head
        result << head.va
        head = head.next
    end
    
    mid = result.length / 2 
    result[mid..-1]
end