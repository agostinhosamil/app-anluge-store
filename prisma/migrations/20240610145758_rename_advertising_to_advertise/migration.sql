/*
  Warnings:

  - You are about to drop the `advertising` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `advertising` DROP FOREIGN KEY `advertising_postId_fkey`;

-- DropForeignKey
ALTER TABLE `advertising` DROP FOREIGN KEY `advertising_productId_fkey`;

-- DropTable
DROP TABLE `advertising`;

-- CreateTable
CREATE TABLE `advertise` (
    `id` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `banner` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `content` VARCHAR(191) NULL,
    `style` ENUM('CARD', 'BANNER') NOT NULL,
    `position` ENUM('TOP', 'BOTTOM', 'FEED') NOT NULL,
    `popup` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `postId` INTEGER NULL,
    `productId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `advertise` ADD CONSTRAINT `advertise_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `advertise` ADD CONSTRAINT `advertise_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
