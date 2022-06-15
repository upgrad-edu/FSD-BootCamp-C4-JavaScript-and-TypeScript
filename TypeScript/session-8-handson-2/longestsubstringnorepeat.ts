
// JavaScript program to find the length of the
// longest substring without repeating
// characters
// This function returns true if all characters in
// str[i..j] are distinct, otherwise returns false
function areDistinct(str, i, j)
{
	
	// Note : Default values in visited are false
	var visited = new [26];

	for(var k = i; k <= j; k++)
	{
		if (visited[str.charAt(k) - 'a'] == true)
			return false;
			
		visited[str.charAt(k) - 'a'] = true;
	}
	return true;
}

// Returns length of the longest substring
// with all distinct characters.
function longestUniqueSubsttr(str)
{
	var n = str.length();
	
	// Result
	var res = 0;
	
	for(var i = 0; i < n; i++)
		for(var j = i; j < n; j++)
			if (areDistinct(str, i, j))
				res = Math.max(res, j - i + 1);
				
	return res;
}

// Driver code
	var str = "getthedemoquestion";
	document.write("The input string is " + str);

	var len = longestUniqueSubsttr(str);
	
	document.write("The length of the longest " +
					"non-repeating character " +
					"substring is " + len);

