export const getUserIp = async () =>{
   const ip = await  fetch('https://api.ipify.org/?format=json')
    .then(results => results.json())
    .then(data => {return data.ip})
    return ip
}

export const checkIfDevoloper  = async ()  =>{
    console.log(await getUserIp())
    if( await getUserIp() == '46.117.12.9'){
        console.log('Have fun!')
        return true
    }
    // return false
    return true
}
