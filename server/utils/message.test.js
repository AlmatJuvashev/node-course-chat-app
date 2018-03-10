const expect = require('expect');

const {generateMessage} = require('./message')

describe('generate message', () => {
    it('should generate the correct message object', () => {
        let from = 'Almat';
        let text = 'Hello world';

        let msg = generateMessage(from, text);

        expect(msg).toInclude({
            from,
            text
        })
        expect(msg.createdAt).toBeA('number');
    })
});
