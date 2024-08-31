-- CreateTable
CREATE TABLE `highlight` (
    `id` VARCHAR(191) NOT NULL,
    `context` ENUM('STORE', 'BLOG', 'HELP') NOT NULL DEFAULT 'STORE',
    `categoryId` VARCHAR(191) NULL,
    `productId` VARCHAR(191) NULL,
    `postId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `highlight` ADD CONSTRAINT `highlight_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `highlight` ADD CONSTRAINT `highlight_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `highlight` ADD CONSTRAINT `highlight_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
