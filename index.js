const readLine = require('readLine-sync');

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm(){
        return readLine.question('Type a Wikpedia search term: ');
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of'];
        const selectedPrefixId = readLine.keyInSelect(prefixes, 'Choose one option: ');
        const selectedPrefixTest = prefixes[selectedPrefixId];

        return selectedPrefixTest;
    }

    console.log(content);
}

start();