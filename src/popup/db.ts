import { openDB } from "idb";


const DB_NAME = "MyDatabase"
const STORE_NAME = "items"

export const dbPromise = openDB(DB_NAME, 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
        }
    } 
});

export async function addItem(item: { name: string; value: string }) {
    const db = await dbPromise;
    return db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).add(item);
}

export async function getItems() {
    const db = await dbPromise;
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).getAll();
}

export async function getItemById(id: number) {
    const db = await dbPromise;
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(id);
}

export async function updateItem(id: number, updatedData: { name?: string; value?: string }) {
    const db = await dbPromise;
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
  
    const existingItem = await store.get(id);
    if (!existingItem) {
      throw new Error(`Элемент с id ${id} не найден`);
    }
  
    const updatedItem = { ...existingItem, ...updatedData };
    await store.put(updatedItem);
    await tx.done;
  }
  
  

export async function deleteItem(id: number) {
    const db = await dbPromise;
    return db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).delete(id);
}