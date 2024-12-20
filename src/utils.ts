import {Offer} from './types';

export const getOffersByCity = (offers: Offer[], filterType: string) => offers.filter((offer) => offer.city.name === filterType);

export const getFavoritesCities = (offers: Offer[]) => [...new Set(offers.map((offer) => offer.city.name))];
