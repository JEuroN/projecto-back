
CREATE SEQUENCE public.product_table_product_id_seq;

CREATE TABLE public.product_table (
                product_id INTEGER NOT NULL DEFAULT nextval('public.product_table_product_id_seq'),
                product_handle VARCHAR NOT NULL,
                product_title VARCHAR NOT NULL,
                product_description VARCHAR NOT NULL,
                product_sku VARCHAR NOT NULL,
                product_grams FLOAT NOT NULL,
                product_stock INTEGER NOT NULL,
                product_price INTEGER NOT NULL,
                product_compare_price INTEGER NOT NULL,
                product_barcode VARCHAR,
                CONSTRAINT product_table_pk PRIMARY KEY (product_id)
);


ALTER SEQUENCE public.product_table_product_id_seq OWNED BY public.product_table.product_id;

CREATE SEQUENCE public.user_table_user_id_seq;

CREATE TABLE public.user_table (
                user_id INTEGER NOT NULL DEFAULT nextval('public.user_table_user_id_seq'),
                user_username VARCHAR NOT NULL,
                user_password VARCHAR NOT NULL,
                user_firstname VARCHAR NOT NULL,
                user_lastname VARCHAR NOT NULL,
                CONSTRAINT user_table_pk PRIMARY KEY (user_id)
);


ALTER SEQUENCE public.user_table_user_id_seq OWNED BY public.user_table.user_id;
