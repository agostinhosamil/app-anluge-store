-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_userId_fkey`;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
