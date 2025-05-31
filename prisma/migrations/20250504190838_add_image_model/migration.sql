/*
  Warnings:

  - You are about to drop the column `image` on the `portfolio_items` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `sections` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `portfolio_items` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `sections` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "portfolio_items" DROP CONSTRAINT "portfolio_items_imageId_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_imageId_fkey";

-- DropIndex
DROP INDEX "portfolio_items_imageId_key";

-- DropIndex
DROP INDEX "sections_imageId_key";

-- AlterTable
ALTER TABLE "portfolio_items" DROP COLUMN "imageId",
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sections" DROP COLUMN "imageId",
ADD COLUMN     "image" TEXT;

-- DropTable
DROP TABLE "images";
