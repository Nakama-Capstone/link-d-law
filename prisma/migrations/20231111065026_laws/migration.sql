-- CreateTable
CREATE TABLE "Law" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Law_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawBab" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lawId" INTEGER NOT NULL,

    CONSTRAINT "LawBab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawData" (
    "id" SERIAL NOT NULL,
    "pasal" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lawBabId" INTEGER NOT NULL,

    CONSTRAINT "LawData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LawBab" ADD CONSTRAINT "LawBab_lawId_fkey" FOREIGN KEY ("lawId") REFERENCES "Law"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawData" ADD CONSTRAINT "LawData_lawBabId_fkey" FOREIGN KEY ("lawBabId") REFERENCES "LawBab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
