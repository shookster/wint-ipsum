// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      `how do i get cowboy paint off a dog .`,
      `im little jesica. im dying because of obamas help care bill. im on my death bed and the doctor is ignoring me because my dady works hard`,
      `Welcome to the citadel of eternal wisdom. Behold, this crystal contains the sum of all human knowledge -- Except Rap And Country`,
      `icant come to work today.. on account of JERRY DUTY *SHoves every seinfeld disk into dvd player at once*`,
      `'im not owned! im not owned!!', i continue to insist as i slowly shrink and transform into a corn cob`,
      `fuck "jokes". everything i tweet is real. raw insight without the horse shit. no, i will NOT follow trolls. twitter dot com. i live for this`,
      `see this watch? i got it by Crying. my car? crying. my beautiful wife? Crying. My perfect teeth? Crying. now get the fuck out of my office`,
      `another day volunteering at the betsy ross museum. everyone keeps asking me if they can fuck the flag. buddy, they wont even let me fuck it`,
      `how come a baby born with a foot in its brain is considered a "Miracle Baby" but when I get my dick stuck in a drawer im just some asshole`,
      `"jail isnt real," i assure myself as i close my eyes and ram the hallmark gift shop with my shitty bronco`,
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;