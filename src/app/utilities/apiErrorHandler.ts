export const errorHandling = (error: any) => {
  if (error === 401) {
    window.location.reload()
  } else {
    console.log(error)
  }
}
