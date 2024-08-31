-- CreateTable
CREATE TABLE `project` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `segment` VARCHAR(191) NOT NULL,
    `slag` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL DEFAULT 'image-placeholder.jpg',
    `description` MEDIUMTEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `project_slag_key`(`slag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
