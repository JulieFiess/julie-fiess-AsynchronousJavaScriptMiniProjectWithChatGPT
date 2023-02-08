//Here's an example of unit tests using Jest:

const readline = require('readline');
const { once } = require('events');

jest.mock('readline');

describe('askQuestion', () => {
    it('should ask the correct questions in order', async () => {
        const questions = [            "What is your name? ",            "What is your favorite superhero? ",            "Why do you like that superhero? ",            "What is your favorite comic book series? ",            "Why do you like that series? "        ];

        const mockWrite = jest.fn();
        const mockQuestion = jest.fn();
        readline.createInterface.mockReturnValue({
            question: mockQuestion,
            output: { write: mockWrite },
        });

        require('./index');

        let index = 0;
        for await (const [question] of mockQuestion.mock.results) {
            expect(question).toEqual(questions[index++]);
        }
    });

    it('should save the answers and display them correctly', async () => {
        const mockWrite = jest.fn();
        const mockQuestion = jest.fn();
        readline.createInterface.mockReturnValue({
            question: mockQuestion,
            output: { write: mockWrite },
        });

        require('./index');

        const answers = [            'John Doe',            'Superman',            'He is the symbol of hope and has superpowers',            'The Dark Knight Returns',            'It is a dark and intense story that shows a different side of Batman'        ];

        for (let i = 0; i < answers.length; i++) {
            const [, callback] = mockQuestion.mock.calls[i];
            callback(answers[i]);
        }

        const close = once(readline.createInterface(), 'close');
        close.then(() => {
            expect(mockWrite.mock.calls[0][0]).toEqual('Thank you for taking the survey!');
            expect(mockWrite.mock.calls[1][0]).toEqual('Your answers: ');
            expect(mockWrite.mock.calls[2][0]).toEqual(`Name: ${answers[0]}`);
            expect(mockWrite.mock.calls[3][0]).toEqual(`Favorite superhero: ${answers[1]}`);
            expect(mockWrite.mock.calls[4][0]).toEqual(`Reason: ${answers[2]}`);
            expect(mockWrite.mock.calls[5][0]).toEqual(`Favorite comic book series: ${answers[3]}`);
            expect(mockWrite.mock.calls[6][0]).toEqual(`Reason: ${answers[4]}`);
        });
    });
});

//Note: The ./index file is assumed to be the file containing the code you provided.