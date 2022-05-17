
// JavaScript code for above approach

// Power function to calculate
// long powers with mod
function power(x, y, p)
{
	let res = 1;
	x = x % p;

	if (x == 0)
		return 0;

	while (y > 0)
	{
		if ((y & 1) != 0)
			res = (res * x) % p;
			
		y = y >> 1;
		x = (x * x) % p;
	}
	return res;
}

// Function for finding number of ways to
// create string with length N and atmost
// K contiguous vowels
function kvowelwords(N, K)
{
	let i, j;
	let MOD = 1000000007;

	// Array dp to store number of ways
	let dp = new Array(N + 1)
	// Loop to create 2D array using 1D array
	for (i = 0; i < dp.length; i++) {
		dp[i] = new Array(K + 1);
	}

	let sum = 1;
	for(i = 1; i <= N; i++)
	{
		
		// dp[i][0] = (dp[i-1][0]+dp[i-1][1]..dp[i-1][k])*21
		dp[i][0] = sum * 21;
		dp[i][0] %= MOD;

		// Now setting sum to be dp[i][0]
		sum = dp[i][0];

		for(j = 1; j <= K; j++)
		{
			
			// If j>i, no ways are possible to create
			// a string with length i and vowel j
			if (j > i)
				dp[i][j] = 0;
				
			else if (j == i)
			{
				
				// If j = i all the character should
				// be vowel
				dp[i][j] = power(5, i, MOD);
			}
			else
			{
				
				// dp[i][j] relation with dp[i-1][j-1]
				dp[i][j] = dp[i - 1][j - 1] * 5;
			}

			dp[i][j] %= MOD;

			// Adding dp[i][j] in the sum
			sum += dp[i][j];
			sum %= MOD;
		}
	}
	return sum;
}

// Driver Code

	// Input
	let N = 3;
	let K = 3;

	// Function Call
	document.write( kvowelwords(N, K));

