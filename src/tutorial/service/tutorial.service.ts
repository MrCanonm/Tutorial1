import { Injectable } from '@nestjs/common';
import { DataSnapshot, get, push, ref, set } from 'firebase/database';
import { firebaseDataBase } from 'src/firebase.config';

@Injectable()
export class TutorialService {
  async createData(data: any): Promise<void> {
    const dataRef = ref(firebaseDataBase, 'Data');
    const newElementRef = push(dataRef, { dataRef: data });
    await set(newElementRef, data);
    console.log('se creo exitosamente');
  }

  async getData(): Promise<any> {
    const dataRef = ref(firebaseDataBase, 'Data');
    const snapshot: DataSnapshot = await get(dataRef);
    console.log('Data recibida exitosamente');
    return snapshot.val();
  }
}
