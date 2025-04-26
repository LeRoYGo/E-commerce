export type ProductCatalogProps = {
  title: string;
  isShowCount?: boolean;
  maxEl?: number;
  filterList?: string | null;
};

export type ProductCardProps = {
  id: string | number;
  slug: string;
  title: string;
  images: string[];
  description: string;
  category: Category;
  price: number;
  creationAt: string;
  updatedAt: string;
};

export type Category = {
  id: string | number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type FilterTypes = { label: string; value: string | number };

export type Filter = {
  title: string | null;
  categorySlug: string | null;
};

export type CategoryMin = Pick<Category, 'name' | 'slug'>;

export type GalleryProps = {
  pictures: string[];
};
