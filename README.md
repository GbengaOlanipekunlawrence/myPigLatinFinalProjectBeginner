Here I used a Traslator :In my function I start  start by converting the received string word to lowercase. 
This is to prevent any casing related errors during comparison(“a” does not equal “A”).

Secondly, I  initialize two variables:

(A) vowels - containing the five English vowels that is  ["a", "e", "i", "o", "u"]
(B) vowelIndex - for storing the index at which the first vowel in the word is found. It is initialized to 0.
We use an if…else statement to check if the first letter of the word can be found within our vowels array by calling the .includes() method on 
the array while passing it the first letter of the string word[0].
 If it is found, this returns true, which implies that the first letter is a vowel. Hence, we simply add "``acedu``" 
 to the end of the string and return the result as the Pig Latin equivalent.

If the statement evaluates to false, it signifies that the starting character is a consonant. 
Hence, we use a for…of loop to iterate through the string to identify the position of the first vowel. 
When we locate the first vowel, we use the .indexOf() method to retrieve it’s position in the string and store it into the variable vowelIndex.
 After this step we terminate the loop using the break statement.

At the last line, we use the .slice() method to manipulate the string to generate the Pig Latin equivalent.

The .slice() method is used to extract a portion of an array starting from the specified beginning to end without modifying the original array.
 It returns a new array containing all elements from the starting index till the end index without including the item at the end index. 
 When no end index is specified it assumes the end of the string as the end index.

str.slice(vowelIndex) extracts a portion of the string starting from the first vowel(i.e the vowelIndex up till the end.
str.slice(0, vowelIndex) extracts the portion of the string starting at index 0(i.e the beginning) up until the first vowel at position vowelIndex.
The extracted portion here is the consonant or consonant cluster as the case may be. Note that the .slice() 
method returns the portion from the starting index to but not including the end index.
We combine these extracted portions and affix "``ayac``" to the end to form the final result which is returned from the function as such.
