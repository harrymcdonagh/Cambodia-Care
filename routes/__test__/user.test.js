const app = require('../../server.js')
const request = require('supertest')

describe('UserLogin', () => {
    it('Returns code 201 if logged in successfully', async () =>{
        const res = await request(app).post('/login-confirm').send({email : 'Sam.p@gmail.com',password : 'Tallman'});
        expect(res.statusCode).toEqual(201);
    }); 
});

describe('MakeBooking', () => {
    it('Returns code 201 if all fields are passed correctly', async () => {
        const res = await request(app).post('/make-booking').send({ type: 'education', 'start-date': '2024-07-01', 'end-date': '2024-07-10', userID : 5, email: 'Sam.p@gmail.com'});
        expect(res.statusCode).toEqual(201);
    });
});


describe('CreateUser', () => {
    it('Returns code 201 if all three fields are passed', async () => {
        const res = await request(app).post('/register-confirm').send({ name: 'sam', email: 'sam@gmail.com', password: 'password123' });
        expect(res.statusCode).toEqual(201);
    });
});



