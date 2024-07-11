/*
  Warnings:

  - Added the required column `userId` to the `tb_secret_questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_secret_questions" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tb_secret_questions" ADD CONSTRAINT "tb_secret_questions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_users"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
