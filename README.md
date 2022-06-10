# Secure Storage Key Value Store

The Secure Storage plugin has a Key Value storage API called [KeyValueStorage](https://ionic.io/docs/secure-storage/key-value) that makes securely storing data on a mobile device easier.

> `KeyValueStorage` was added in v2.3.0 of the [Secure Storage](https://ionic.io/docs/secure-storage/) plugin and has the advantage of not depending on `@ionic/storage`, `localForage` or `@ionic/storage-angular`.

This sample application uses `KeyValueStorage` in a real world scenario where it is used to allow the app to work offline by storing API results when online and returning cached data stored on the device when offline.

- [data-storage.service.ts](src/app/data-storage.service.ts) - This service reads and writes values using Secure Storage's `KeyValueStorage`. It will also clear stored data if the wrong encryption key is used.
- [cache.service.ts](src/app/cache.service.ts) - This service handles caching from observables from `HttpClient` emitting cached or fresh data.
- [api.service.ts](src/app/api.service.ts) - This service handles requests to get data from the Star Wars API and uses `CacheService`.

### Note

The sample application has its encrpytion key hardcoded in code. This is not secure and you should securely generate and store an encryption key using a plugin like [Idenity Vault](https://ionic.io/docs/identity-vault) or obtain the encryption key via your backend.