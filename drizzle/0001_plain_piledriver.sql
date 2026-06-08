CREATE TYPE "public"."gender" AS ENUM('Male', 'Female');--> statement-breakpoint
ALTER TABLE "students" RENAME COLUMN "nama" TO "name";