const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');


Database.then(async db => {
    // //inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-19.9196016",
    //     lng: "-43.9484139",
    //     name: "Lar das meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "978456123",
    //     images: [
    //         "https://images.unsplash.com/photo-1576024267263-70f1caffd6fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1553268882-827ff90c67e2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    //     opening_hours: "Horário de visitas Das 18h até 8hs",
    //     open_on_weekends: "0"
    // })



    // //consultar dados da tabela 
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // //consultar somente 1 orphanato, pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
    // console.log(orphanage)

    //deletar dados
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'))

})