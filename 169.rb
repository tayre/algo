=begin
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
=end

# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    freq = nums.tally
    majority_count = nums.size / 2
    freq.each do |key, count|
        return key if count > majority_count
    end
end