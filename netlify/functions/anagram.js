const correctAnswer = 'character1=c&character2=o&character3=r&character4=o&character5=n&character6=a&character7=v&character8=i&character9=r&character10=u&character11=s';

exports.handler = async function(event, context) {
    const submittedAnswer = event.body.toLowerCase()

    if (submittedAnswer === correctAnswer) {
        return {
            statusCode: 301,
            headers: {
                Location: 'https://ft.com',
            }
        };
    }
    
    return {
        statusCode: 301,
        headers: {
            Location: 'https://nifty-jones-5706aa.netlify.app/anagram-fail',
        }
    };
}
