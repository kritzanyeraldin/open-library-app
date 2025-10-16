export interface BookDto {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

export interface Book {
  id: string;
  title: string;
  authorName: string;
  coverId?: number;
}

export interface BookDetailsDto {
  key: string;
  title: string;
  description?: { value: string };
  covers?: number[];
  authors?: { author: { key: string } }[];
  first_publish_date?: string;
}

export interface BookDetails {
  id: string;
  title: string;
  description?: string;
  coverId?: number;
  firstPublishDate?: string;
}
