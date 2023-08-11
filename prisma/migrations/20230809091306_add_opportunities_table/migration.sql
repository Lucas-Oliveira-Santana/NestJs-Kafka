/*
  Warnings:

  - You are about to drop the `crm_opoortunities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "crm_opoortunities";

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "tenant_id" INTEGER NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opportunities" (
    "id" TEXT NOT NULL,
    "client_id" TEXT,
    "customer_id" INTEGER NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_firstname" TEXT NOT NULL,
    "customer_lastname" TEXT NOT NULL,
    "customer_phone" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "item_name" TEXT NOT NULL,
    "item_quantity" INTEGER NOT NULL,

    CONSTRAINT "opportunities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "opportunities" ADD CONSTRAINT "opportunities_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
