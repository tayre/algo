=begin
Given two strings ransom_note and magazine, return true if ransom_note can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransom_note.
=end

# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
    note_freq = ransom_note.downcase.gsub(/[^a-z]/, '').chars.tally
    magazine_freq = magazine.downcase.gsub(/[^a-z]/, '').chars.tally

    note_freq.all? do |char, count|
        magazine_freq[char] && count <= magazine_freq[char]
    end
end