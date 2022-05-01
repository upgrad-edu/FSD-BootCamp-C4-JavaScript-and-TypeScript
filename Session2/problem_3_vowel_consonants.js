function vowel_consonants_count(str)
{
  var vowel_list = 'aeiouAEIOU';
  var vowelCount = 0;
  var consonantsCount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
        vowelCount += 1;
    }else{
        consonantsCount += 1;
    }
  
  }
  console.log("Vowels count :: ", vowelCount);
  console.log("Consonants count :: ", consonantsCount);
}
vowel_consonants_count("Hello World");