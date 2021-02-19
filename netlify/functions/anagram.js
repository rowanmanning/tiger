const correctAnswer = 'answer=coronavirus';

exports.handler = async function(event, context) {
    const submittedAnswer = event.body.toLowerCase()

    if (submittedAnswer === correctAnswer) {
        return {
            statusCode: 301,
            headers: {
                Location: 'https://theft.lol/next-clue',
            }
        };
    }
    
    return {
        statusCode: 301,
        headers: {
            Location: 'https://theft.lol/anagram-fail',
        }
    };
}
