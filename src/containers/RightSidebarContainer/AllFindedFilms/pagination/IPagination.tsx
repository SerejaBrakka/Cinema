export interface IPagination {
  paginate(number: number): void;
  itemsPerPage: number;
  totalItems: number;
}
