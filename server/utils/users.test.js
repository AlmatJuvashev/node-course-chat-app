const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Al',
            room: 'Angular Course'
        }, {
            id: '3',
            name: 'Ken',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        let userInstance = new Users();

        let user = {
            id: '123',
            name: 'Almat',
            room: 'room A'
        };

        let resUser = userInstance.addUser(user.id, user.name, user.room);

        expect(userInstance.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let studentId = '1';
        let student = users.removeUser(studentId);
        expect(student.id).toBe(studentId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let studentId = '88';
        let student = users.removeUser(studentId);
        expect(student).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let studentId = '2';
        let student = users.getUser(studentId);
        expect(student.id).toBe(studentId);
    });

    it('should not find user', () => {
        let studentId = '88';
        let student = users.getUser(studentId);
        expect(student).toNotExist();
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Ken']);
    });

    it('should return names for angular course', () => {
        let userList = users.getUserList('Angular Course');
        expect(userList).toEqual(['Al']);
    });
});
