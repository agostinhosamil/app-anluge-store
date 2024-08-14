/*
  Warnings:

  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `_PostToTag` DROP FOREIGN KEY `_PostToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `advertise` DROP FOREIGN KEY `advertise_postId_fkey`;

-- DropForeignKey
ALTER TABLE `media` DROP FOREIGN KEY `media_postId_fkey`;

-- AlterTable
ALTER TABLE `_PostToTag` MODIFY `A` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `advertise` MODIFY `postId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `media` MODIFY `postId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `post` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `advertise` ADD CONSTRAINT `advertise_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `media` ADD CONSTRAINT `media_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToTag` ADD CONSTRAINT `_PostToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
