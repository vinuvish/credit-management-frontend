import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { fireAuth, fireFirestore } from '../firebase/firebase';

type State = {
};

export const useAppStore = create<State>((set, get) => ({



}));



if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useAppStore);
}
