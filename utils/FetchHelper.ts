export async function errorChecker(res:Response) {
    const errorCode = res.ok ? false : res.status
    const errorMessage = res.ok ? false : res.statusText
    const show = await res.json()
    return {
        props: { 
            show,
            error: {errorCode, errorMessage}, 
        }
      }
};
