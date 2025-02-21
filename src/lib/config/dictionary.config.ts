import { Locale } from './i18n.config'

const dictionaries = {
    en: () => import('@/lib/dictionaries/en.json').then(module => module.default),
    id: () => import('@/lib/dictionaries/id.json').then(module => module.default),
}
type DictionaryPromise = ReturnType<typeof dictionaries.en>;
export type TDictionary = Awaited<DictionaryPromise>;

export const getDictionary = async (locale: Locale) => {
    if (!dictionaries[locale]) {
        throw new Error(`Dictionary for locale '${locale}' not found.`);
    }
    return dictionaries[locale]();
}
