DROP TABLE IF EXISTS "experiments";

CREATE TABLE "experiments" (
 "id" serial PRIMARY KEY,
 "name" character varying(50) NOT NULL,
 "type" character varying(50) NOT NULL,
 "start_date" character varying(70) NOT NULL,
 "result" character varying(50) NOT NULL,
 "test_data" character varying(50) NOT NULL,
 "train_data" character varying(50) NOT NULL
)

--psql -U johnm.long -d listings_db -a -f create_host_data.sql