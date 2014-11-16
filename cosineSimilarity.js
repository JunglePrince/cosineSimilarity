var TOLLERANCE = 3;

// testing from the command line
var args = process.argv.slice(2);

console.log("Similarity Score: " + similarityScore(args[0], args[1]));

// returns a similarity score given two sets of 3 dimensional signals
function similarityScore (a, b) {
  // convert to magnitudes
  a = convertToMagnitude(a);
  b = convertToMagnitude(b);

  // allign to first local max
  alignFront(a,b);

  // trim back to match the length
  matchLength(a, b);

  return cosineSimilarity(a, b);
}

function convertToMagnitude(a) {
  a = a.map(function (vec) { 
    return Math.sqrt(Math.sqrt(vec[0]) + Math.sqrt(vec[1]) + Math.sqrt(vec[2]));
  });
}

function matchLength(a, b) {
    // trim the ends to match.
  if (a.length < b.len) {
    b = b.splice(0, a.length);
  }

  if (b.length < a.len) {
    a = a.splice(0, b.length); 
  }
}

function alignFront(a, b) {
  // find first max in a
  ai = 1;
  for (ai = 1; ai < a.length; ai++) {
    if (a[ai] + TOLLERANCE < a[ai-1]) {
      break
    }
  }

  // find first max in b
  bi = 1;
  for (bi = 1; bi < a.length; bi++) {
    if (a[bi] + TOLLERANCE < a[bi-1]) {
      break
    }
  }

  // if the max in a came before max in b trim the front of b
  if (ai < bi) {
    b = b.splice(0, bi-ai);
  }

  // if the max in b came before max in a trim the front of a
  if (bi < ai) {
    a = a.splice(0, ai-bi);
  }
}

//returns the cosine similarity
function cosineSimilarity(a, b) {
  return dotProduct(a, b) / (magnitude(a) * magnitude(b);
}

function magnitude(a) {
  magnitude = 0;

  for(i = 0; i < a.length; i++) {
    magnitude += a[i] * a[i];
  }
  return Math.sqrt(magnitude);
}

function dotProduct(a, b) {
  dotProd = 0;
  len = Math.min(a.length,b.length);

  for (i = 0; i < len; i++) {
    dotProd += a[i] * b[i];
  }
  return dotProd;
}