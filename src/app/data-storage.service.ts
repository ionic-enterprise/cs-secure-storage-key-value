import { CacheStorageProvider, CacheValue } from './cache.service';
import { KeyValueStorage } from '@ionic-enterprise/secure-storage/ngx';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService implements CacheStorageProvider {
    private ready: Promise<void>;

    constructor(private storage: KeyValueStorage) {
        this.createStorage();
    }

    public async readValue(key: string): Promise<CacheValue> {
        try {
            await this.ready;
            return JSON.parse(await this.storage.get(key));
        } catch (error) {
            console.error('readValue', error);
            return undefined;
        }
    }

    public async writeValue(key: string, value: CacheValue): Promise<void> {
        await this.ready;
        await this.storage.set(key, JSON.stringify(value));
    }

    public async clear(): Promise<void> {
        await this.ready;
        await this.storage.clear();
    }

    /**
     * Create the storage specifying the encryption key to be used
     *
     * @returns Promise
     */
    private async createStorage() {
        this.ready = this.storage.create('super-secret-key');
        this.ready.catch((error) => this.handleCreateError(error));
    }

    /**
     * If the encryption key is invalid we want to clear our storage
     *
     * @param error
     */
    private async handleCreateError(error: Error): Promise<void> {
        if (error?.message?.includes('may be invalid')) {
            try {
                await this.storage.destroyStorage();
                await this.createStorage();
                console.log('Recreated storage as encryption key was invalid');
            } catch (clearError) {
                console.error('handleCreateError.destroyStorage Failure', clearError);
            }
        } else {
            console.error('handleCreateError', error);
        }
    }
}
