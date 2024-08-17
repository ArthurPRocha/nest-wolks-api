/*
  Warnings:

  - Changed the type of `year` on the `tb_cars` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tb_cars" DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL;
