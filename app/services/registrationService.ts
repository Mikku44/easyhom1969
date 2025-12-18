// services/registrationService.ts

import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  limit as fbLimit,
} from "firebase/firestore";
import { db } from "~/lib/firebase/config";

/** MODEL */
export interface IRegistration {
  phone: string;
  job: string;
  salary: number | string;
  paymentStatus: string;
  firstName: string;
  lastName: string;
  email?: string;
  coBorrower: string;
  created_at?: any;
  updated_at?: any;
}

const REGISTRATIONS_COLLECTION = "registrations";

export const registrationService = {
  /** CREATE */
  async create(data: IRegistration) {
    const colRef = collection(db, REGISTRATIONS_COLLECTION);

    const newData = {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    };

    const docRef = await addDoc(colRef, newData);
    return { id: docRef.id };
  },

  /** GET ALL */
  async getAll(limit = 20) {
    const colRef = collection(db, REGISTRATIONS_COLLECTION);

    const q = query(
      colRef,
      orderBy("created_at", "desc"),
      fbLimit(limit)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...(docItem.data() as IRegistration),
    }));
  },

  /** GET BY ID */
  async getById(id: string) {
    const docRef = doc(db, REGISTRATIONS_COLLECTION, id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) return null;

    return { id: snap.id, ...(snap.data() as IRegistration) };
  },

  /** UPDATE */
  async update(id: string, data: Partial<IRegistration>) {
    const docRef = doc(db, REGISTRATIONS_COLLECTION, id);

    const newData = {
      ...data,
      updated_at: serverTimestamp(),
    };

    await updateDoc(docRef, newData);
    return true;
  },

  /** DELETE */
  async delete(id: string) {
    const docRef = doc(db, REGISTRATIONS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  },
};
