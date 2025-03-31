=begin
You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

Return the binary representation of date.
=end
    
end

# @param {String} date
# @return {String}
def convert_date_to_binary(date)
    date.split("-").map { |ele| ele.to_i.to_s(2) }.join("-")
end