-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "chests" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
