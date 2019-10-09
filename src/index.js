module.exports = function check(str, bracketsConfig) {
    
    let newConf = []
    let test;
 
    let check=true;
    let result;

    for (let i = 0; i < bracketsConfig.length; i++) {
        test = bracketsConfig[i];
        newConf[i] = test[0] + test[1];
    }

    let newStr = str;

    while (check) {
        let newCheck = false;
        for (let j = 0; j < newConf.length; j++) {
            const tmpStr = newStr.replace(newConf[j], "");

            if (tmpStr !== newStr) {
                newStr = tmpStr;
                newCheck = true;
            }
        }
        check = newCheck;
    }

        if (newStr.length >0) {
        result = false;
    } else {
        result = true;
    }



    
 return result;
}
