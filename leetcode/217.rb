
=begin
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
=end

# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    seen = {}
    nums.any? { |n| seen[n] ? true : (seen[n] = true; false) }
 end