-- 1. admin_users
CREATE TABLE admin_users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- 2. categories
CREATE TABLE categories (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL REFERENCES admin_users(id),
  nom        TEXT NOT NULL,
  slug       TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. articles
CREATE TABLE articles (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL REFERENCES admin_users(id),
  titre      TEXT NOT NULL,
  contenu    TEXT NOT NULL,
  image_url  TEXT,
  slug       TEXT NOT NULL UNIQUE,
  publie     BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. articles_categories
CREATE TABLE articles_categories (
  article_id  UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, category_id)
);

-- 5. likes
CREATE TABLE likes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id  UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  fingerprint TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE (article_id, fingerprint)
);

-- 6. comments
CREATE TABLE comments (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  pseudo     TEXT NOT NULL,
  message    TEXT NOT NULL,
  visible    BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. blocked_fingerprints
CREATE TABLE blocked_fingerprints (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blocked_by  UUID NOT NULL REFERENCES admin_users(id),
  fingerprint TEXT NOT NULL UNIQUE,
  raison      TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
);