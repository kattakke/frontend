export const formatDate = (date: Date): string => {
  const y = date.getFullYear()
  const m = ('00' + (date.getMonth() + 1).toString()).slice(-2)
  const d = ('00' + date.getDate().toString()).slice(-2)
  return [y, m, d].join('-')
}
