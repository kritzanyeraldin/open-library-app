'use client';

import {
  ArrowSquareOutIcon,
  BookBookmarkIcon as BookBookmark,
  BookOpenIcon as BookOpen,
  HeartStraightIcon as Heart,
  MagnifyingGlassIcon as Search,
  TrashIcon as Trash,
} from '@phosphor-icons/react';
import { IconProps as PIconProps } from '@phosphor-icons/react';

export const icons = {
  bookOpen: BookOpen,
  bookBookmark: BookBookmark,
  trash: Trash,
  heart: Heart,
  search: Search,
  arrowSquareOut: ArrowSquareOutIcon,
} as const;

type IconProps = PIconProps & {
  type: keyof typeof icons;
  className?: string;
};

export const Icon = ({
  type,
  weight = 'bold',
  size = 18,
  color = 'var(--color-primary)',
  className = '',
  ...restProps
}: IconProps) => {
  const SelectedIcon = icons[type];
  if (!SelectedIcon) return null;

  return (
    <SelectedIcon
      size={size}
      weight={weight}
      color={color}
      className={className}
      {...restProps}
    />
  );
};
