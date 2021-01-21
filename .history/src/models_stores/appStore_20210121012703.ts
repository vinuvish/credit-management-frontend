import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { fireAuth, fireFirestore } from '../firebase/firebase';
import { ApplicationMode } from '../models/ApplicationModel';

type State = {
};

export const useAppStore = create<State>((set, get) => ({
  applications: ApplicationMode[];
  streamApplication: () => void;


}));



if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useAppStore);
}
