=begin
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
=end

# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    return false if s.length != t.length
  
    lookup = {}
  
    s.chars.zip(t.chars).each do |char_s, char_t|
      unless lookup.key?(char_s)
        return false if lookup.value?(char_t)
        lookup[char_s] = char_t
      else
        return false if lookup[char_s] != char_t
      end
    end
  
    true
  end