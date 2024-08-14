import db from "~/db.server";

export async function getAllShelves(query: string | null) {
  return await db.pantryShelf.findMany({
    where: {
      name: { contains: query ?? "", mode: "insensitive" },
    },
    include: { items: { orderBy: { name: "asc" } } },
    orderBy: { createdAt: "desc" },
  });
}

export const createShelf = async () =>
  await db.pantryShelf.create({ data: { name: "New Shelf" } });
