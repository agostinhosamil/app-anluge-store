-- AlterTable
ALTER TABLE `category` ADD COLUMN `context` ENUM('STORE', 'BLOG', 'HELP') NULL DEFAULT 'STORE';
