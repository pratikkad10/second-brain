

export const hashString = (len: number)=>{
    const query = "qwertyuiopasdfghjklzxcvbnm1234567890";
    const length = query.length;
    let ans="";
    for(let i=0; i<len; i++){
        ans += query[Math.floor(Math.random()*length)]
    }
    return ans;
}