/*
  Warnings:

  - You are about to drop the column `userId` on the `tb_secret_questions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[question]` on the table `tb_secret_questions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `answer` to the `tb_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `tb_users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tb_secret_questions" DROP CONSTRAINT "tb_secret_questions_userId_fkey";

-- AlterTable
ALTER TABLE "tb_secret_questions" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "tb_users" ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "questionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tb_secret_questions_question_key" ON "tb_secret_questions"("question");

-- AddForeignKey
ALTER TABLE "tb_users" ADD CONSTRAINT "tb_users_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "tb_secret_questions"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
