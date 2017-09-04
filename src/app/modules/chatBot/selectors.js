export const stateSelector = state => {
    console.log(state.app.state.step.currentStep);
    return state.app.state.step;
};
