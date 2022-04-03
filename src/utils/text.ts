import { DEFAULT_TEXT_LIMIT } from '@constants'
export const textLimit = (text: string, limit = DEFAULT_TEXT_LIMIT) => {
  if (!text) return ''

  if (text.length > limit) {
    return text.substring(0, limit) + '...'
  }
  return text
}
