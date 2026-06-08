CREATE TABLE "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"npm" text NOT NULL,
	"nama" text NOT NULL,
	"alamat" text NOT NULL,
	"gender" "gender" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"name" text NOT NULL,
	"password_hash" text DEFAULT '' NOT NULL,
	"token" text DEFAULT '',
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
