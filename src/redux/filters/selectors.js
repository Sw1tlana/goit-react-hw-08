// import { createSelector } from "@reduxjs/toolkit";
// import { selectContacts } from '../contacts/selectors';

// export const selectNameFilter = (state) => state.filters.name;

// export const selectFilteredContacts = createSelector(
//     [selectContacts, selectNameFilter],
//       (items, filter) => {
//         if (filter && filter.trim() !== "") {
//             return items.filter((contact) =>
//                 contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//                 contact.number.toLowerCase().includes(filter.toLowerCase())
//             );
//         }
//         return items;
//     }
// );

import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items; // змініть шлях до вашого реального селектора для контактів

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (items, filter) => {
        const contacts = items.data || []; // Отримайте масив контактів з об'єкта

        if (filter && filter.trim() !== "") {
            return contacts.filter((contact) =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.number.toLowerCase().includes(filter.toLowerCase())
            );
        }
        return contacts;
    }
);