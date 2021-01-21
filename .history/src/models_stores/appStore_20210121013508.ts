import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { fireAuth, fireFirestore } from '../firebase/firebase';
import { ApplicationMode } from '../models/ApplicationModel';

type State = {
  applications: ApplicationMode[];
  streamApplication: () => void;


};

export const useAppStore = create<State>((set, get) => ({

  applications: [],
  streamApplication: () => {

    if (get().applications.length === 0)
      fireFirestore.collection('paymentPlan').onSnapshot((querySnapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
        let applications: ApplicationMode[] = [];
        querySnapshot.docs.forEach((docSnapshot) => {
          const res = ApplicationMode.fromFirestore(docSnapshot);
          if (res) applications.push(res);

        });


        set((state) => {
          return { ...state, applications: applications };
        });
      }

    }));




if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useAppStore);
}
