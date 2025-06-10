export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanityAuthor {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: SanityImage;
  bio?: any[]; // Block content
}

export interface SanityCategory {
  _id: string;
  title: string;
  slug: string;
}

export interface SanityBlockContent {
  _type: "block";
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children: {
    _type: "span";
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _type: string;
    _key: string;
    href?: string;
  }[];
}

export interface SanityPost {
  _id: string;
  _type: "post";
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  author?: SanityAuthor;
  mainImage?: SanityImage;
  categories?: SanityCategory[];
  publishedAt: string;
  body: (SanityBlockContent | SanityImage)[];
}

export interface PostPreview {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: SanityImage;
  publishedAt: string;
  author?: {
    name: string;
  };
  categories?: {
    title: string;
  }[];
}
