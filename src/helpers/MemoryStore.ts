type MemoryStoreDataObject = {
  apiAccessToken?: string
}

export class MemoryStore {
  /**
   * @var MemoryStoreDataObject
   */
  private static store: MemoryStoreDataObject = {}

  static set<PropertyKey extends keyof MemoryStoreDataObject>(
    property: PropertyKey,
    value: MemoryStoreDataObject[PropertyKey]
  ) {
    MemoryStore.store[property] = value
  }

  static get<PropertyKey extends keyof MemoryStoreDataObject>(
    property: PropertyKey
  ) {
    return MemoryStore.store[property]
  }
}
