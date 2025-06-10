export const fetchPostQuery = `*[_type == "post"] {
  _id,
  title,
  slug,
  excerpt,
  body,
  mainImage{
            asset->{
                _id,
                url
            },
            alt
        },
  author -> {
    name,
    image,
  },
  publishedAt,
  categories[]->{
    title,
    description
  }
}`;

export const fetchPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  author -> {
    name,
    image,
  },
  publishedAt,
  categories[]->{
    title,
    description
  }
}`;
