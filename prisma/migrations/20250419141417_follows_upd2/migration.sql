/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Follow_userId_key" ON "Follow"("userId");
