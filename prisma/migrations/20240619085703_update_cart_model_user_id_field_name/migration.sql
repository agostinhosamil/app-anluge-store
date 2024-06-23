/*
  Warnings:

  - You are about to drop the column `idUser` on the `cart` table. All the data in the column will be lost.
  - Added the required column `userId` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_idUser_fkey`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `idUser`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
