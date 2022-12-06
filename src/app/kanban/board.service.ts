import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Board } from './board.model';
import * as firestore from 'firebase/firestore';
import { switchMap } from 'rxjs';
import { writeBatch } from 'firebase/firestore';


@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  async createBoard(data: Board) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('boards').add({
      ...data,
      uid: user?.uid,
      tasks: [{ description: 'Hello', label: 'yellow ' }],
    });
  }

  deleteBoard(boardId: string) {
    return this.db.collection('boards').doc(boardId).delete();
  }

  updateTasks(boardId: string, tasks: Task[]) {
    return this.db.collection('boards').doc(boardId).update({ tasks });
  }
  removeTask(boardId: string, task: Task) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({ tasks: firestore.arrayRemove(task) });
  }

  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.collection<Board>('boards', ref => 
            ref.where('uid', '==', user.uid).orderBy('priority ')
          )
          .valueChanges({idField: 'id'})
        } else {
          return []
        }
      })
    )
  }

  sortBoards(boards: Board[]) {
    // const db = fir
    // const batch = writeBatch(db)
    // const refs = boards.map(b => db.collection('boards').doc(b.id));
    // refs.forEach((ref, idx) => batch.update(ref, {priority: idx}))
  }

}
