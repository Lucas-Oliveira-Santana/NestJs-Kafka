-- DropForeignKey
ALTER TABLE "opportunities" DROP CONSTRAINT "opportunities_client_id_fkey";

-- AddForeignKey
ALTER TABLE "opportunities" ADD CONSTRAINT "opportunities_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
