function saveOrphanage(db, orphanage) {
    return db.run(`
        INSERT INTO FPNews (
            name,
            about,
            whatsapp,
            images,
            instructions,
            email,
            numero
        ) VALUES (
        
        "${News.name}",
        "${News.about}",
        "${News.whatsapp}",
        "${News.images}",
        "${News.instructions}",
        "${News.numero}",
        "${News.email}"
        
        );    
    `);
}

module.exports = saveNewsLetters;