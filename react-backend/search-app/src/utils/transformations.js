import camelcaseKeys from 'camelcase-keys';

export const parseItemsResults = (items) => camelcaseKeys(items, {deep: true});

export const parsePrice = (amount) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
