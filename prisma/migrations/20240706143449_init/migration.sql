-- CreateTable
CREATE TABLE "tb_cars" (
    "_id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "info" TEXT NOT NULL,
    "image_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "tb_cars_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "tb_users" (
    "_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_cars_model_key" ON "tb_cars"("model");

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");

-- AddForeignKey
ALTER TABLE "tb_cars" ADD CONSTRAINT "tb_cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_users"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
