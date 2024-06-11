-- AlterTable
ALTER TABLE `advertising` ADD COLUMN `popup` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `productId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `body` LONGTEXT NOT NULL;

-- AddForeignKey
ALTER TABLE `advertising` ADD CONSTRAINT `advertising_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
