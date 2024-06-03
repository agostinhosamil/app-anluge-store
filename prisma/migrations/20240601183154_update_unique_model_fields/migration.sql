/*
  Warnings:

  - A unique constraint covering the columns `[slag]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slag]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slag]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slag` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_parentId_fkey`;

-- AlterTable
ALTER TABLE `category` MODIFY `icon` VARCHAR(191) NULL DEFAULT 'category-icon-placeholder.jpg';

-- AlterTable
ALTER TABLE `product` ADD COLUMN `slag` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `AdminInvitation` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AdminInvitation_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Category_slag_key` ON `Category`(`slag`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_slag_key` ON `Product`(`slag`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_sku_key` ON `Product`(`sku`);

-- CreateIndex
CREATE UNIQUE INDEX `Tag_slag_key` ON `Tag`(`slag`);

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
