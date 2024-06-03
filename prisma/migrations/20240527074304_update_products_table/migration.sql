/*
  Warnings:

  - A unique constraint covering the columns `[barCode]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `barCode` VARCHAR(191) NULL,
    ADD COLUMN `sku` VARCHAR(8) NULL,
    ADD COLUMN `stock` INTEGER NULL DEFAULT -1,
    ADD COLUMN `type` ENUM('PHYSICAL', 'DIGITAL') NOT NULL DEFAULT 'PHYSICAL';

-- CreateIndex
CREATE UNIQUE INDEX `Product_barCode_key` ON `Product`(`barCode`);
