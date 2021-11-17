let arr=[1,2,5]

function countWays(N)
    {
        let count = new Array(N+1);
        count.fill(0);
           
        // base case
        count[0] = 1;
           
        // count ways for all values up
        // to 'N' and store the result
        for (let i = 1; i <= N; i++)
            for (let j = 0; j < arr.length; j++)
       
                // if i >= arr[j] then
                // accumulate count for value 'i' as
                // ways to form value 'i-arr[j]'
                if (i >= arr[j])
                    count[i] += count[i - arr[j]];
           
        // required number of ways
        return count[N];
           
    }

    console.log(countWays(5));