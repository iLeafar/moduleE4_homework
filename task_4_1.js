const obj = {
    'id': 1,
    'name': "name",
    'prop': 'property'
}
function getObjKeysVals (obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ — ${key}, значение — ${obj[key]}`)
        }
    }
}
getObjKeysVals(obj)