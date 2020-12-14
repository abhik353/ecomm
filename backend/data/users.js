import bcrypt from 'bcryptjs'

const users = [
    {
        name : 'admin',
        email : 'admin@admin.com',
        password : bcrypt.hashSync('1234', 10),
        isAdmin : true
    },
    {
        name : 'user 1',
        email : 'user1@admin.com',
        password : bcrypt.hashSync('1234', 10)
    },
    {
        name : 'user 2',
        email : 'user2@admin.com',
        password : bcrypt.hashSync('1234', 10)
    },
]

export default users