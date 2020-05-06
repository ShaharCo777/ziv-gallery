export const tableArrange = (arr, num=3)=>{
    let newArr = []
    const numRows = arr.length/3
    for(let i=0; i < numRows; i++){
        let newRow = []
        for(let n=0; n < num; n++){
            newRow[n] = arr.shift()
        }
        newArr.push(newRow)
    }
    return newArr
}