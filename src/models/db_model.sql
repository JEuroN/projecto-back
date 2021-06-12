
CREATE SEQUENCE public.product_table_product_id_seq;

CREATE TABLE public.product_table (
                product_id INTEGER NOT NULL DEFAULT nextval('public.product_table_product_id_seq'),
                handle VARCHAR NOT NULL,
                title VARCHAR NOT NULL,
                description VARCHAR NOT NULL,
                sku VARCHAR NOT NULL,
                grams REAL NOT NULL,
                stock INTEGER NOT NULL,
                price INTEGER NOT NULL,
                compare_price INTEGER NOT NULL,
                barcode VARCHAR NOT NULL,
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
