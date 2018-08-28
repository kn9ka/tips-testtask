export const numberWithSpace = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const parseTime = (time) => {
  const data = time.split(' ')
  const parsedDate = data[0].replace(/-/g, '.')
  const parsedTime = data[1]

  return { time: parsedTime, date: parsedDate }
}
