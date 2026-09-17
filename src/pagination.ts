export const paginate = (items, page, size) => items.slice((page-1)*size, page*size);
