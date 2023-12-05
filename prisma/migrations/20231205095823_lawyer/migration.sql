-- CreateTable
CREATE TABLE "Lawyer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specialist" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "nomorPerandi" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "fee" INTEGER NOT NULL,

    CONSTRAINT "Lawyer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educationalBackground" (
    "id" SERIAL NOT NULL,
    "lawyerId" INTEGER NOT NULL,
    "university" TEXT NOT NULL,
    "major" TEXT NOT NULL,

    CONSTRAINT "educationalBackground_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "firmaHukum" (
    "id" SERIAL NOT NULL,
    "lawyerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "firmaHukum_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "educationalBackground" ADD CONSTRAINT "educationalBackground_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "firmaHukum" ADD CONSTRAINT "firmaHukum_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
