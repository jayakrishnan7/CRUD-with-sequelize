import { Sequelize, DataType } from 'sequelize-typescript';

import db from '../config/db';

const User = db.define('user', {
    username: {
        type: DataType.STRING
    },
    classNumber: {
        type: DataType.STRING
    },
    dob: {
        type: DataType.DATE
    },
    email: {
        type: DataType.STRING
    },
    isDeleted: {
        type: DataType.BOOLEAN
    },
    password: {
        type: DataType.STRING
    },
    phone: {
        type: DataType.STRING
    }
})

module.exports = User;