/*
* Because I am being lazy and string matching we need to answers
* One for each version of the coordinates (c13 or 13c)
*/

const correctAnswers = [
    'character1=c&character2=a&character3=r&character4=n&character5=i&character6=v&character7=o&character8=r&character9=o&character10=u&character11=s&coordinates=c13',
    'character1=c&character2=a&character3=r&character4=n&character5=i&character6=v&character7=o&character8=r&character9=o&character10=u&character11=s&coordinates=13c',
]

exports.handler = async function(event, context) {
    const submittedAnswer = event.body.toLowerCase()

    if (correctAnswers.includes(submittedAnswer)) {
        return {
            statusCode: 301,
            headers: {
                Location: 'https://nifty-jones-5706aa.netlify.app/anagram',
            }
        };
    }
    
    return {
        statusCode: 301,
        headers: {
            Location: 'https://nifty-jones-5706aa.netlify.app/search-fail',
        }
    };
}
