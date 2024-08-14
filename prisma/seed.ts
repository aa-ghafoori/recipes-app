import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Pantry Shelves
  const shelfData = [
    {
      name: "Fruits",
      items: {
        create: [{ name: "Apples" }, { name: "Bananas" }],
      },
    },
    {
      name: "Dairy",
      items: {
        create: [{ name: "Eggs" }, { name: "Milk" }],
      },
    },
  ];

  const [shelf1, shelf2] = await Promise.all(
    shelfData.map((shelf) => prisma.pantryShelf.create({ data: shelf }))
  );

  console.log({ shelf1, shelf2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
