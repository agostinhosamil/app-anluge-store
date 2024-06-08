-- AlterTable
ALTER TABLE `rate` ADD COLUMN `productId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `rate` ADD CONSTRAINT `rate_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
