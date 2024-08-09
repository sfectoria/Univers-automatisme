import { PrismaClient } from '@prisma/client';
import { contents, pages, sections } from './data';

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
        password:
          '$2b$10$4YCNEOqafQxBVYeX2e5jZ.KjtCBrX5OGC/zAqRpyy2v6DSmoAxDUy',
        role: 'SuperAdmin',
      },
    ],
  });

  // Création des Pages et Sections
  const page = await prisma.page.createMany({
    data: pages,
  });
  const section = await prisma.section.createMany({
    data: sections,
  });

  const content = await prisma.content.createMany({
    data: contents,
  });
  // const content = await prisma.content.createMany({
  //   data:contents

  // });

  // console.log({ accueilPage, quiSommesNousPage, contactPage, profilPage });
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
