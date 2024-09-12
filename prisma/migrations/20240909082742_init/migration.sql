-- CreateTable
CREATE TABLE "Chest" (
    "id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "name" TEXT,
    "lat" INTEGER NOT NULL,
    "lon" INTEGER NOT NULL,

    CONSTRAINT "Chest_pkey" PRIMARY KEY ("id")
);
