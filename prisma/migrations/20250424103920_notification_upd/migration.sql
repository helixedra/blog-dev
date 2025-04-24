-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "relatedCommentId" INTEGER,
ADD COLUMN     "relatedPostId" INTEGER,
ADD COLUMN     "relatedUserId" INTEGER;
