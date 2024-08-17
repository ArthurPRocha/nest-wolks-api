-- DropForeignKey
ALTER TABLE "tb_users" DROP CONSTRAINT "tb_users_questionId_fkey";

-- AlterTable
ALTER TABLE "tb_users" ALTER COLUMN "questionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tb_users" ADD CONSTRAINT "tb_users_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "tb_secret_questions"("_id") ON DELETE SET NULL ON UPDATE CASCADE;
