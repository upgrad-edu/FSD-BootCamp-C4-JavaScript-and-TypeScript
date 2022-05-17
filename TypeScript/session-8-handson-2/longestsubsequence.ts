	// Javascript program to find longest
	// alternating subsequence in an array
	
	// Function to return longest
	// alternating subsequence length
	function zzis(arr, n)
	{
		/*las[i][0] = Length of the longest
			alternating subsequence ending at
			index i and last element is
			greater than its previous element
		las[i][1] = Length of the longest
			alternating subsequence ending at
			index i and last element is
			smaller than its previous
			element */
		let las = new Array(n);
		for (let i = 0; i < n; i++)
		{
			las[i] = new Array(2);
			for (let j = 0; j < 2; j++)
			{
				las[i][j] = 0;
			}
		}

		/* Initialize all values from 1 */
		for (let i = 0; i < n; i++)
			las[i][0] = las[i][1] = 1;

		let res = 1; // Initialize result

		/* Compute values in bottom up manner */
		for (let i = 1; i < n; i++)
		{
			// Consider all elements as
			// previous of arr[i]
			for (let j = 0; j < i; j++)
			{
				// If arr[i] is greater, then
				// check with las[j][1]
				if (arr[j] < arr[i] &&
					las[i][0] < las[j][1] + 1)
					las[i][0] = las[j][1] + 1;

				// If arr[i] is smaller, then
				// check with las[j][0]
				if( arr[j] > arr[i] &&
				las[i][1] < las[j][0] + 1)
					las[i][1] = las[j][0] + 1;
			}

			/* Pick maximum of both values at
			index i */
			if (res < Math.max(las[i][0], las[i][1]))
				res = Math.max(las[i][0], las[i][1]);
		}

		return res;
	}
	
	let arr = [ 10, 22, 9, 33, 49, 50, 31, 60 ];
	let n = arr.length;
	document.write("Length of Longest "+
					"alternating subsequence is " +
					zzis(arr, n));
	
	

