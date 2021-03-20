class DeltaCoding{
    static encode(str){
        let encodedString = " ";
        encodedString[0]=str[0];
        for(let i=1;i<str.length;i++){
            encodedString[i]=str[i]-str[i-1];
        }
        return encodedString;
    }
}

console.log(DeltaCoding.encode("24697"));