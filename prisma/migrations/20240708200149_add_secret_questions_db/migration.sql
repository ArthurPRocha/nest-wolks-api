-- CreateTable
CREATE TABLE "tb_secret_questions" (
    "_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_secret_questions_pkey" PRIMARY KEY ("_id")
);
