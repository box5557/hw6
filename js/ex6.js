

const dictionary = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];
  
  const dictionaryContainer = document.getElementById("content");
  dictionaryContainer.innerHTML = dictionary.map(entry => `<dt><strong>${entry.term}</strong></dt><dd style="margin-left:40px">${entry.definition}</dd>`).join("");
  
