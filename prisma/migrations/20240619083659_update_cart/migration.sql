-- AlterTable
ALTER TABLE `cart` ADD COLUMN `status` ENUM('PENDING', 'PROGRESS', 'DELIVERED', 'RETURN') NOT NULL DEFAULT 'PENDING';
