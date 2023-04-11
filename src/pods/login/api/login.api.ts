export const doLogin = (username:string, password:string) => {
    const promise = new Promise<boolean> ((resolve, reject) => {
        setTimeout(() => {
            resolve(username==="admin" && password ==="test");
        }, 800);
    })
    return promise;
}