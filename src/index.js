import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// input: str1 = "dog", str2 = "frog"
// output: 3

// input: str1 = "some", str2 = "some"
// output: 0

// input: str1 = "some", str2 = "thing"
// output: 9

// input: str1 = "", str2 = ""
// output: 0

function min(a, b) {
  return a <= b ? a : b;
}

function deletionDistance(str1, str2) {
  const str1Len = str1.length;
  const str2Len = str2.length;

  const memo = [...Array(str1Len + 1)].map(() => new Array(str2Len + 1));

  for (let i = 0; i <= str1Len; i++) {
    for (let j = 0; j <= str2Len; j++) {
      if (i === 0) {
        memo[i][j] = j;
      } else if (j === 0) {
        memo[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        memo[i][j] = 1 + min(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }

  console.log(memo);

  return memo[str1Len][str2Len];
}

console.log(deletionDistance("some", "s"));
