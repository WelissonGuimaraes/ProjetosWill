const Database = require('./database/db');
const FPNews = require('./database/FP_News')

module.exports = {

    index(req, res) {

        return res.render('index')
    },

    async FP_News(req, res) {
        const id = req.query.id;


        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM FP_News WHERE id = "${id}"`);

            const NewsFP = results[0];


            NewsFP.images = NewsFP.images.split(",")
            NewsFP.fistImage = NewsFP.images[0]

            if (NewsFP.numero == "0") {
                NewsFP.News = false;
            } else {
                NewsFP.News = true;
            }

            return res.render('NewsFP', { NewsFP })
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!')
        }
    },
    async NewsFPs(req, res) {
        try {
            const db = await Database;
            const NewsFPs = await db.all("SELECT * FROM NewsFPs")
            return res.render('NewsFPs', { NewsFPs });
        } catch (error) {
            console.log(error);
            return res.send('erro no banco de dados');
        }
    },
    createNewsFP(req, res) {
        return res.render('create-NewsFP');
    },

    async saveNewsFP(req, res) {

        const fields = req.body;

        //validar se os campos estão preechidos
        if (Object.values(fields).includes("")) {
            return res.send("Todos os campos devem ser preenchidos!");
        }

        try {
            const db = await Database;
            await saveNewsFP(db, {
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                email: fields.email,
                News: fields.News
            });
            //redirecionamento 
            return res.redirect('/NewsFPs');

        } catch (error) {
            console.log(error);
            return res.send("Erro no banco de dados!");
        }
    },
};