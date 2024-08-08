/*
  Warnings:

  - You are about to drop the column `name` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Section` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN "name",
DROP COLUMN "value",
ADD COLUMN     "button1" TEXT,
ADD COLUMN     "button2" TEXT,
ADD COLUMN     "paragraph" TEXT,
ADD COLUMN     "subtitle" TEXT,
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "content";

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "alt" TEXT,
    "contentId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
