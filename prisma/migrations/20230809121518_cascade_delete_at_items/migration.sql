-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_opportunitiesId_fkey";

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_opportunitiesId_fkey" FOREIGN KEY ("opportunitiesId") REFERENCES "opportunities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
