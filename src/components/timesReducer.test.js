import { initializeTimes, updateTimes } from './timesReducer';

export const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    return await fetchAPI(today); // Fetch available times for today
};

// Reducer function to update available times
export const updateTimes = async (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return await fetchAPI(action.date); // Fetch available times for the selected date
        default:
            return state;
    }
};