

CREATE TABLE "public"."videos"("id" serial NOT NULL, "title" text NOT NULL, "total_minutes" integer NOT NULL, "intro" Text NOT NULL, "eyecatch_url" Text NOT NULL, "category" Text NOT NULL, "amazon_id" integer, PRIMARY KEY ("id") , UNIQUE ("amazon_id"), UNIQUE ("id"));

CREATE TABLE "public"."amazon"("id" serial NOT NULL, "asin" Text NOT NULL, "vanilla_url" Text NOT NULL, "processed_url" Text NOT NULL, "original_eyecatch_url" Text NOT NULL, PRIMARY KEY ("id") );

alter table "public"."videos"
           add constraint "videos_amazon_id_fkey"
           foreign key ("amazon_id")
           references "public"."amazon"
           ("id") on update restrict on delete restrict;

alter table "public"."videos" drop constraint "videos_amazon_id_fkey",
             add constraint "videos_amazon_id_fkey"
             foreign key ("amazon_id")
             references "public"."amazon"
             ("id") on update restrict on delete set null;

ALTER TABLE ONLY "public"."videos" ALTER COLUMN "category" SET DEFAULT 'anime';

alter table "public"."amazon" rename column "original_eyecatch_url" to "original_eyecatch";

alter table "public"."videos" rename column "eyecatch_url" to "eyecatch";

ALTER TABLE "public"."amazon" ADD COLUMN "is_d_anime" boolean NULL DEFAULT false;

ALTER TABLE "public"."amazon" ALTER COLUMN "is_d_anime" SET NOT NULL;

ALTER TABLE "public"."amazon" ADD COLUMN "stars" numeric NULL;

ALTER TABLE "public"."amazon" ADD COLUMN "language" Text NULL;

ALTER TABLE "public"."amazon" ADD COLUMN "released_year" integer NULL;

ALTER TABLE "public"."amazon" ALTER COLUMN "is_d_anime" DROP NOT NULL;

ALTER TABLE "public"."amazon" ADD COLUMN "is_rental" boolean NULL DEFAULT false;

alter table "public"."amazon" rename column "is_rental" to "is_not_prime";

alter table "public"."videos" rename column "intro" to "synopsis";

alter table "public"."videos" rename column "eyecatch" to "eyecatch_webp";

ALTER TABLE "public"."videos" ADD COLUMN "eyecatch_jpg" text NULL;

ALTER TABLE "public"."videos" ALTER COLUMN "eyecatch_jpg" SET NOT NULL;

ALTER TABLE "public"."videos" ALTER COLUMN "eyecatch_webp" DROP NOT NULL;

ALTER TABLE "public"."videos" DROP COLUMN "eyecatch_webp" CASCADE;

alter table "public"."videos" rename column "eyecatch_jpg" to "eyecatch";
