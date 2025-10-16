import { removeWorksPrefix } from '@/adapters/common.adapters';
import { BookDetails, BookDetailsDto } from '@/types';

export const adaptBookDetails = (dto: BookDetailsDto): BookDetails => ({
  id: removeWorksPrefix(dto.key),
  title: dto.title,
  coverId: dto.covers?.[0],
  description:
    typeof dto.description === 'string'
      ? dto.description
      : dto.description?.value,
  firstPublishDate: dto.first_publish_date,
});
