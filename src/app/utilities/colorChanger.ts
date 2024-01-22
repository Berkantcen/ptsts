export const colorChanger = (colordata: string) => {
  switch (colordata) {
    case 'primary':
      return '#3e97ff'
    case 'secondary':
      return '#dbdfe9'
    case 'success':
      return '#50cd89'
    case 'info':
      return '#7239ea'
    case 'warning':
      return '#ffc700'
    case 'danger':
      return '#f1416c'
    case 'light':
      return '#f9f9f9'
    default:
      return 'dddddd'
  }
}
