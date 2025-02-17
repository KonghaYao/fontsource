export interface QueriesAll {
  weights?: number;
  styles?: string;
  subsets?: string;
  defSubset?: string;
  category?: string;
  type?: string;
}

export type QueriesAllIndex =
  | 'weights'
  | 'styles'
  | 'subsets'
  | 'defSubset'
  | 'category'
  | 'type';

export interface QueriesOne {
  version?: string;
}

export interface QueryMongoose {
  $and: QueriesAll[];
}
