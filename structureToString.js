/**
 * Returns a string representation of the given object
 * @param originalObj the object to be stringified
 * @param tabCount an integer that determines how many tab characters should be at the start of the first/last line of the string
 * @returns string representation of the given object
 */
const objectToString = (originalObj, tabCount) => {
    
    const objKeys = Object.keys(originalObj);
    
    //If an empty object, we don't need any more than this
    if(objKeys.length === 0)
        return "{}".padStart(2 + tabCount, "\t");
    
    
    
    let result = "{\n".padStart(2 + tabCount, "\t"); 
    tabCount++;
    
    
    //We want to go through each key, determine the type, and then generate a string (padded with enough tabs) for that property
    objKeys.forEach((key, idx) => {
        
        const element = originalObj[key];
        let propStr = `${key}: `.padStart(key.length + 2 + tabCount, "\t");
        
        if(Array.isArray(element))
            propStr += arrayToString(element, tabCount).trimStart();
        else if(element && typeof element === "object")
            propStr += objectToString(element, tabCount).trimStart();
        else if(typeof element === "string")
            propStr += `"${element}"`;
        else
            propStr += element;
        
        //If this is the last element, we don't want a comma
        if(idx !== objKeys.length - 1)
            propStr += ","
        
        result += propStr + "\n"
    });
    
    
    tabCount--;
    result += "}".padStart(1 + tabCount, "\t");
    
    return result;
};






/**
 * Returns a string representation of the given array
 * @param originalArray the array to be stringified
 * @param tabCount an integer that determines how many tab characters should be at the start of the first/last line of the string
 * @returns string representation of the given array
 */
const arrayToString = (originalArray, tabCount) => {
    
    //If an empty array, we don't need any more than this
    if(originalArray.length === 0)
        return "[]".padStart(2 + tabCount, "\t");
    
    
    let result = "[\n".padStart(2 + tabCount, "\t");
    tabCount++;
    
        
    //We want to go through each element, determine the type, and then generate a string (padded with enough tabs) for that element
    originalArray.forEach((element, idx) => {
        let elemStr;
        
        if(Array.isArray(element))
            elemStr = arrayToString(element, tabCount);
        else if(element && typeof element === "object")
            elemStr = objectToString(element, tabCount);
        else if(typeof element === "string")
            elemStr = `"${element}"`.padStart(element.length + 2 + tabCount, "\t");
        else
        {
            elemStr = `${element}`;
            elemStr = elemStr.padStart(elemStr.length + tabCount, "\t");
        }
        
        //If this is the last element, we don't want a comma
        if(idx !== originalArray.length - 1)
            elemStr += ","
        
        result += elemStr + "\n"
    });
    
    
    tabCount--;
    result += "]".padStart(1 + tabCount, "\t");
    
    return result;
}






/**
 * Converts the given array/object into a string that can be pasted directly into your JS/TS code
 * @param structure an array or object to be stringified
 * @returns a string representation of the given structure
 */
module.exports = (structure) => {
    
    if(Array.isArray(structure))
        return arrayToString(structure, 0);
    else if (structure && typeof structure === "object")
        return objectToString(structure, 0);
    else
    {
        console.error("Provided structure must be an array or an object");
        return "";
    }
};