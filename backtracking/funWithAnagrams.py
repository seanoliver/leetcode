# Fun with anagrams: Given an array of strings, remove each string that
# is an anagram of a previous string, then return remaining
# strings in sorted order.

def fun_with_anagrams(str_array):
    observed_strings = []
    result = []

    for word in str_array:
        sorted_string = "".join(sorted(word))

        if sorted_string not in observed_strings:
            observed_strings.append(sorted_string)
            result.append(word)

    return sorted(result)
