// Function to initialize available times
export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer function to update available times
export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initializeTimes(); // For now, return the same times
        default:
            return state;
    }
};
