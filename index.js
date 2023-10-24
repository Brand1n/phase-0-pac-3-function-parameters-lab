function introduction(name){
     return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language){

console.log('Hi, my name is ${name} and I am learning to program in ${language}.')
    console.log(name);
    console.log(language);

}
introductionWithLanguage("Alki", "Ember.js");

function introductionWithLanguageOptional(name,language){
    if(language === JavaScript){
        return "Hi, my name is " + name + ".";
    } else {
        return "Hi, my name is " + name + " and I am lerarning to  program in " + language + ".";
    }
    }
    function introductionWithLanguageOptional(name, language){
        if(language === Python)
          return "Hi, my name is " + name + ".";
      } else {
      return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
      }