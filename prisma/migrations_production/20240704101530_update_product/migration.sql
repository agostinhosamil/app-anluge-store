-- AlterTable
ALTER TABLE "property" ADD COLUMN     "parentId" INTEGER,
ALTER COLUMN "value" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
