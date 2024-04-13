// export const selectContacts = (state) => state.contacts.items;
export const selectContacts = (state) => {
    console.log("Selected contacts:", state.contacts.items);
    return state.contacts.items;
}

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

