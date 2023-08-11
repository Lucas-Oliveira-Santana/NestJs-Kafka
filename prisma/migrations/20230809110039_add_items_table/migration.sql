/*
  Warnings:

  - You are about to drop the column `item_id` on the `opportunities` table. All the data in the column will be lost.
  - You are about to drop the column `item_name` on the `opportunities` table. All the data in the column will be lost.
  - You are about to drop the column `item_quantity` on the `opportunities` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "opportunities" DROP COLUMN "item_id",
DROP COLUMN "item_name",
DROP COLUMN "item_quantity";

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "item_name" TEXT NOT NULL,
    "item_quantity" INTEGER NOT NULL,
    "opportunitiesId" TEXT,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_opportunitiesId_fkey" FOREIGN KEY ("opportunitiesId") REFERENCES "opportunities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
