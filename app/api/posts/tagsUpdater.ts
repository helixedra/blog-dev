import prisma from "@/lib/prisma";

export async function TagsUpdater(tags: any, postId: number) {
    const prepareTags = tags ? tags.split(",").map((tag: string) => tag.trim()) : [];

    if (prepareTags.length > 0) {

        prepareTags.forEach(async (tag: string) => {
          const existingTag = await prisma.tag.findFirst({
            where: {
              name: {
                equals: tag,
                mode: 'insensitive',
              },
            },
          });
          if (!existingTag) {
            const newTag = await prisma.tag.create({
              data: {
                name: tag,
                slug: tag.toLowerCase().replace(/\s+/g, '-'),
              },
            });
            await prisma.postTag.create({
              data: {
                postId,
                tagId: newTag.id,
              },
            });
          }
        })
      }
  }
  