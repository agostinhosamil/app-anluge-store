-- AlterTable
ALTER TABLE `property` ADD COLUMN `parentId` INTEGER NULL,
    MODIFY `value` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
