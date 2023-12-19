import { Sequelize } from "sequelize";

const db = new Sequelize('agenciaviajes', 'root', '40145973', {
    host: '',
    port: '',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})

export default db
