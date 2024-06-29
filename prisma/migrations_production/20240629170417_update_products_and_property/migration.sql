-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('AVAILABLE', 'TRANSIT', 'UPON_REQUEST');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN');

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "mark" TEXT,
ADD COLUMN     "minOrderQuantity" INTEGER DEFAULT -1,
ADD COLUMN     "model" TEXT,
ADD COLUMN     "promotion" BOOLEAN DEFAULT false,
ADD COLUMN     "promotionDiscount" DOUBLE PRECISION DEFAULT 10.0,
ADD COLUMN     "promotionEnd" TIMESTAMP(3),
ADD COLUMN     "status" "ProductStatus" DEFAULT 'AVAILABLE';

-- CreateTable
CREATE TABLE "property" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" "PropertyType" NOT NULL DEFAULT 'STRING',
    "productId" TEXT,

    CONSTRAINT "property_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
