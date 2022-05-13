const dnaToRna = (chain) => {
  let rna;
  const chainArray = chain.split('');
  let result = '';
  const nucleotides = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U',
  }
  for (const sign of chainArray) {
    if (Object.hasOwn(nucleotides, sign)) {
      rna = nucleotides[sign];
      result = result.concat(rna);
    } else {
      return null;
    }
  }
  return result;
};

console.log(dnaToRna(''));
