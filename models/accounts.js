function getUserAccount(userId) {
    return new Promise((resolve, reject) => {
        const user = {
            id: userId,
            email: 'test@example.com',
            name: 'John',
            surname: 'Doe',
            bookings: [
                { id: 1, date: '2024-06-10', duration: '13', location: 'Pu Nagol' },
                { id: 2, date: '2024-06-12', duration: '14', location: 'Pu Nagol' }
            ]
        };
        // Resolve with the user account data
        resolve(user);
    });
}

module.exports = {
    getUserAccount
};