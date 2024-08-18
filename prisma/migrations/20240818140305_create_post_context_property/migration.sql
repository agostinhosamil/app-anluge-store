-- AlterTable
ALTER TABLE `post` ADD COLUMN `context` ENUM('BLOG', 'HELP') NOT NULL DEFAULT 'BLOG',
    ADD COLUMN `subjectId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `subject` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slag` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `subject_slag_key`(`slag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
