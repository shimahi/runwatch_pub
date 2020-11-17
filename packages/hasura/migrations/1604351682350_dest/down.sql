
alter table "public"."videos" rename column "eyecatch" to "eyecatch_jpg";

ALTER TABLE "public"."videos" ADD COLUMN "eyecatch_webp" text;
ALTER TABLE "public"."videos" ALTER COLUMN "eyecatch_webp" DROP NOT NULL;

ALTER TABLE "public"."videos" ALTER COLUMN "eyecatch_webp" SET NOT NULL;

ALTER TABLE "public"."videos" ALTER COLUMN "eyecatch_jpg" DROP NOT NULL;

ALTER TABLE "public"."videos" DROP COLUMN "eyecatch_jpg";

alter table "public"."videos" rename column "eyecatch_webp" to "eyecatch";

alter table "public"."videos" rename column "synopsis" to "intro";

alter table "public"."amazon" rename column "is_not_prime" to "is_rental";

ALTER TABLE "public"."amazon" DROP COLUMN "is_rental";

ALTER TABLE "public"."amazon" ALTER COLUMN "is_d_anime" SET NOT NULL;

ALTER TABLE "public"."amazon" DROP COLUMN "released_year";

ALTER TABLE "public"."amazon" DROP COLUMN "language";

ALTER TABLE "public"."amazon" DROP COLUMN "stars";

ALTER TABLE "public"."amazon" ALTER COLUMN "is_d_anime" DROP NOT NULL;

ALTER TABLE "public"."amazon" DROP COLUMN "is_d_anime";


alter table "public"."videos" rename column "eyecatch" to "eyecatch_url";

alter table "public"."amazon" rename column "original_eyecatch" to "original_eyecatch_url";

ALTER TABLE ONLY "public"."videos" ALTER COLUMN "category" DROP DEFAULT;

alter table "public"."videos" drop constraint "videos_amazon_id_fkey",
          add constraint "videos_amazon_id_fkey"
          foreign key ("amazon_id")
          references "public"."amazon"
          ("id")
          on update restrict
          on delete restrict;

alter table "public"."videos" drop constraint "videos_amazon_id_fkey";

DROP TABLE "public"."amazon";

DROP TABLE "public"."videos";
