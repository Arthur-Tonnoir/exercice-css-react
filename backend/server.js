const express = require("express");
const PORT = process.env.PORT || 3001; 
const app = express();

app.get("/experiences", (req, res) => {
    //req c'est la requete reçu, res c'est la reponse que l'on renvoie
    res.json
    (
        [
            {
                name: "The-ring.io",
                date: "Stage–04/01 au 17/02/2021",
                description: "Conception de site, Formation conception de site Web"
            },
            {
                name: "Lycée Henri Senez",
                date: "Stage–14/01 au 08/02/2019",
                description: "Dépannage des professeurs et inventaire du matériel informatique et vidéo."
            },
            {
                name: "Communauté d'Agglomération Hénin Carvin",
                date: "Stage–24/09 au 19/10/2018 et 12/03 au 06/04/2018",
                description: "Dépannage dans les différents services, observation de l'installation de la fibre optique. Formatage et réinstallations d'ordinateurs. Dépannage des médiathèques du Pas-de-Calais"
            }
        ]
        
    ); // on renvoie un json 
});

app.get("/eductions", (req, res) => {
    //req c'est la requete reçu, res c'est la reponse que l'on renvoie
    res.json
    (
        [
            {
                name: "Formation MS Motion Designer/Game Designer SOFIP",
                date: "10/06 au 20/09/2024",
                description: "Formation Unity 3D, Blender"
            },
            {
                name: "Formation Titre Professionnel Concepteur Développeur d'Application SOFIP",
                date: "02/05 au 04/12/2023",
                description: "Formation JS, HTML/CSS, SQL, React, TypeScript…"
            },
            {
                name: "Formation Développeur Java/JEE IB-Formation Cegos",
                date: "Stage–25/04 au 19/07/2022",
                description: "Formation Java, Spring, JS, HTML/CSS, Angular, TypeScript…"
            },
            {
                name: "Lycée Gaston Berger Lille",
                date: "BTS Système Informatique aux Organisations option SLAM (2019-2021)",
                description: "Dépannage des professeurs et inventaire du matériel informatique et vidéo."
            },
            {
                name: "Lycée Robespierre – Lens",
                date: "Bac Système Numérique (2016-2019)",
                description: "Les équipements et les installations exploités et organisés avec mention."
            }
        ]
        
    ); // on renvoie un json 
});

app.listen(PORT, () => {
    console.log(`le port de mon backend est le : ${PORT}`);
})