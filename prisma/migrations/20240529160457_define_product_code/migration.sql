/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `code` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_code_key` ON `Product`(`code`);
