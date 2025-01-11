interface CatalogObjectType {
  id: number;
  src: string;
  alt: string;
}

export const CATALOG_DATA: CatalogObjectType[] = [
  { id: 1, src: "/navigation/cart.png", alt: "cart" },
  { id: 2, src: "/navigation/like.png", alt: "like" },
  { id: 3, src: "/navigation/profile.png", alt: "profile" },
];
