import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
      (items, filter) => {
        if (filter && filter.trim() !== "") {
            return items.filter((contact) =>
                contact.username.toLowerCase().includes(filter.toLowerCase())
            );
        }
        return items;
    }
);