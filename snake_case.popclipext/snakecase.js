function snakeCase(text) {    
  const regex=/\s+/g; // match whitespace(s)
  return text.replace(regex, "_").toLowerCase(); // replace whitespaces with _ and convert to lowercase
}

if (typeof(define) !== 'undefined') { // when running in popclip, export the function
  define(() => {
      return (selection) => {        
          popclip.pasteText(snakeCase(selection.text));
      }
  })
}
else { // when running in jsc, perform tests
  function test() {
      const data = [
          ["blah", "Blah"],
          ["BLAH", "Blah"],
          ["'BLAH-blah'", "'Blah-Blah'"],
          ["\"BLAH-blah'", "\"Blah-Blah'"],
          ["  BLAH (blah-more", "  Blah (Blah-More"],
          ["élan güt написанная!", "Élan Güt Написанная!"],
          ['"Nick\'s best dog\'s fur"', '"Nick\'s Best Dog\'s Fur"'],
          ["Nick's   best dog's fur", "Nick's   Best Dog's Fur"],
          ["😀nick's   best dog’s fur", "😀Nick's   Best Dog’s Fur"],
      ];
      data.forEach((pair) => {
          const [input, output]=pair;
          const result=snakeCase(input);
          print(`${output===result?'pass  ':'fail *'} ${input} => ${result} (expected: ${output})`);
      });
  }
  test();
}