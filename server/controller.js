require('dotenv').config()
const Sequelize = require('sequelize')
const{CONNECTION_STRING} = process.env


const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        } 
    } 
  })

module.exports = {
    seed: (req, res) => {
        sequelize.query(
            `
            create table reasons (
                reason_id serial primary key,
                reason varchar(100) NOT NULL
            );
            
            insert into reasons (reason) 
            values ('the feeling of the rain falling on your face'), 
            ('you are not as alone as you feel'), 
            ('making a snowman that scares your neighbors'), 
            ('listening to your favorite music'), 
            ('nostalgia'), 
            ('sunshine on your skin'), 
            ('watching the sunrise or sunset'), 
            ('watching the phase of the moon change overtime'), 
            ('things could get better'), 
            ('at least one person loves you (I do)'), 
            ('climbing a tree is magical'), 
            ('sitting in a bookstore on the floor and reading'), 
            ('iced chai lattes'), 
            ('dancing in your room alone'), 
            ('working on yourself and seeing improvements'), 
            ('swimming in a lake and all of the noise goes away'), 
            ('walking on a silent snowy street at night'), 
            ('unexpected, silly things happen'), 
            ('life is honestly just kind of funny'), 
            ('so many different types of cheese'), 
            ('new cool things will be invented'), 
            ('there are mines to explore just like in minecraft'), 
            ('dogs can lick your face'), 
            ('humans can smell oncoming rain better than sharks can smell blood')
            
            `
    ).then(dbRes => res.status(200).send(dbRes[0]))
},

            createReason: (req, res) => {
                let { reason } = req.body
        
                sequelize.query(`
                INSERT INTO reasons (reason)
                    VALUES ('${reason}')
                `)
                .then(dbRes => res.status(200).send(dbRes[0]))
            },

    getReason: (req, res) => {
        sequelize.query(
            `select * from reasons
            `
            ).then(dbRes => res.status(200).send(dbRes[0]))

      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * reasons.length);
        let randomReason = reasons[randomIndex];
      
        res.status(200).send(randomReason);
    }
}
