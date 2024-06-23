-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_cartId_fkey`;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
