-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_userId_fkey`;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
