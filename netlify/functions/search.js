/*
* Because I am being lazy and string matching we need to answers
* One for each version of the coordinates (c2 or 2c)
*/
const correctAnswers = [
    'answer=carnivorous&coordinates=c2',
    'answer=carnivorous&coordinates=2c',
]

exports.handler = async function(event, context) {
    const submittedAnswer = event.body.toLowerCase()

    if (correctAnswers.includes(submittedAnswer)) {
        return {
            statusCode: 301,
            headers: {
                Location: 'https://theft.lol/anagram',
            }
        };
    }
    
    return {
        statusCode: 301,
        headers: {
            Location: 'https://theft.lol/search-fail',
        }
    };
}
