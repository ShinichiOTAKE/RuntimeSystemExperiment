import { create } from "zustand";

type ModalState<I, O> = {
  handleShow: (parameter: I) => Promise<O>
  setHandleShow: (by: ((parameter: I) => Promise<O>)) => void;
};

//export const useModalStore = <I, O>() =>
//  create<ModalState<I, O>>()(set => ({
//    handleShow: async(parameter: I) => ({} as O),
//    setHandleShow: (handleShow) => set({handleShow: handleShow})
//  }));

//var bbb = useModalStore<string, string>()((state) => (state.setHandleShow));

export const useModalStore = 
  create<ModalState<any, any>>((set) => ({
    handleShow: async(parameter) => {},
    setHandleShow: (handleShow) => set({handleShow: handleShow}),
  }));

interface Vote {
  valueVote: number,
  increase: () => void,
  decrease: () => void,
  setVoteWithNumber: (nmb: number) => void,
};

export const useVoteStore = create<Vote>((set) => ({
  valueVote: 0,
  increase: () => set((state) => ({...state, valueVote: state.valueVote = state.valueVote + 1})),
  decrease: () => set((state) => ({...state, valueVote: state.valueVote = state.valueVote - 1})),
  setVoteWithNumber: (nmb) => set((state) => ({...state, valueVote: nmb})),
}));