export const fallbackLng = 'kr'
export const languages = [fallbackLng, 'en', 'ar', 'fr', "es"]
export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
