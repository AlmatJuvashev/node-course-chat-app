const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message')

describe('generate message', () => {
    it('should generate the correct message object', () => {
        let from = 'Almat';
        let text = 'Hello world';
        let msg = generateMessage(from, text);
        expect(msg).toInclude({from, text});
        expect(msg.createdAt).toBeA('number');
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Admin';
        let lat = 1, lng = 2;
        let url = 'https://www.google.com/maps?q=1,2';
        let msg = generateLocationMessage(from, lat, lng);

        expect(msg.url).toEqual(url);
        expect(msg.createdAt).toBeA('number');
        expect(msg).toInclude({from, url});
    });
});
