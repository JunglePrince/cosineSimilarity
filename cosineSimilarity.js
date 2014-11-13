



// returns a similarity score given two sets of 3 dimensional signals
function similarityScore (a, b) {
  // convert to magnitudes

  // allign to first local max

  // trim back

  return cosineSimilarity(a, b);
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