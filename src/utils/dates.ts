export const getFormattedLaunchDate = (launchDate: string) => {
  const date = new Date(launchDate)
  return date.toLocaleDateString()
}
