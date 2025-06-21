export interface StoreProps {
  reducers: Reducer<unknown, AnyAction> | ReducersMapObject<unknown, AnyAction>;
}

// export type FullState = {};
