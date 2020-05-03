import store from 'store';
import { CLOSE_MODAL, OPEN_MODAL } from 'store/reducers/modalReducer/types';

export const openModal = (type, options) => dispatch => {
    const { modals } = store.getState().modals;
    dispatch({
        type: OPEN_MODAL,
        payload: [...modals, { type, options }]
    });
};

export const closeModal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL,
        payload: []
    });
};
