import { removeWorksPrefix } from '@/adapters/common.adapters';
import { Book, BookDetails, BookDetailsDto, BookDto } from '@/types';

export const adaptBook = (dto: BookDto): Book => ({
  id: removeWorksPrefix(dto.key),
  title: dto.title,
  authorName: dto.author_name?.join(', ') ?? 'Autor desconocido',
  coverId: dto.cover_i,
});

export const adaptBooks = (dtos: BookDto[]): Book[] => dtos.map(adaptBook);

export const adaptBookDetails = (dto: BookDetailsDto): BookDetails => ({
  id: removeWorksPrefix(dto.key),
  title: dto.title,
  description:
    typeof dto.description === 'string'
      ? dto.description
      : dto.description?.value,
});
