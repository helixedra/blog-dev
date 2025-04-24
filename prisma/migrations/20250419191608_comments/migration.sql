/*
  Warnings:

  - You are about to drop the column `authorEmail` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `authorName` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "authorEmail",
DROP COLUMN "authorName",
DROP COLUMN "content",
ADD COLUMN     "comment" TEXT NOT NULL;
