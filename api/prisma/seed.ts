import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Création des utilisateurs
  const user = await prisma.user.createMany({
    data: [
      {
        username: 'SuperAdmin',
        email: 'rawensoltani@gmail.com',
        password: 'sfectoria',
        role: 'SuperAdmin',
      },
      {
        username: 'admin1',
        email: 'admin1@example.com',
        password: 'password',
        role: 'Admin',
      },
      {
        username: 'employee1',
        email: 'employee1@example.com',
        password: 'password',
        role: 'Employee',
      },
      {
        username: 'rawen',
        email: 'rawen@gmail.com',
        password: '$2b$10$4YCNEOqafQxBVYeX2e5jZ.KjtCBrX5OGC/zAqRpyy2v6DSmoAxDUy',
        role: 'SuperAdmin',
      },
    ],
  });

  // Création des Pages et Sections
  const accueilPage = await prisma.page.create({
    data: {
      title: 'Accueil',
      slug: 'accueil',
      sections: {
        create: [
          {
            name: "Secteur d'activité",
            content: "Description du secteur d'activité",
          },
          {
            name: 'Famille de produits',
            content: 'Description de la famille de produits',
          },
          {
            name: 'Partenaires',
            content: 'Description des partenaires',
          },
          {
            name: 'Services',
            content: 'Description des services',
          },
          {
            name: 'Avis des clients',
            content: 'Commentaires et témoignages des clients',
          },
        ],
      },
    },
  });

  const quiSommesNousPage = await prisma.page.create({
    data: {
      title: 'Qui sommes-nous',
      slug: 'qui-sommes-nous',
      sections: {
        create: [
          { name: 'Présentation', content: 'Description de la présentation' },
          { name: 'Mission', content: 'Description de la mission' },
          { name: 'Équipe', content: "Présentation de l'équipe" },
        ],
      },
    },
  });

  const contactPage = await prisma.page.create({
    data: {
      title: 'Contact',
      slug: 'contact',
      sections: {
        create: [
          {
            name: 'Formulaire de contact',
            content: 'Formulaire pour nous contacter',
          },
        ],
      },
    },
  });

  const profilPage = await prisma.page.create({
    data: {
      title: 'Profil',
      slug: 'profil',
      sections: {
        create: [
          {
            name: 'Informations personnelles',
            content: 'Détails des informations personnelles',
          },
        ],
      },
    },
  });


   // Création des contenus
   await prisma.content.createMany({
    data: [
      {
        name: 'Web Design',
        value: 'Web Design',
        sectionId: 4,
      },
      {
        name: 'App Development',
        value: 'App Development',
        sectionId: 4,
      },
      {
        name: 'App Development',
        value: 'App Development',
        sectionId: 4,
      },
    ],
  });

  console.log({ accueilPage, quiSommesNousPage, contactPage, profilPage });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
