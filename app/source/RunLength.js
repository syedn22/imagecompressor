export default class RunLength{
     static encode(str){
         let encodedString="";
         let count=0;

         for(let i=0;i<str.length;i++){
             count=1;
             while(str[i]==str[i+1]){
                 count++;i++;
             }

             encodedString+=count+str[i];
         }

         return encodedString;
     } 
     
     static decode(str){
         let decodedString="";

         for(let i=0;i<str.length;i=i+2){
             let count=Number(str[i]);
             while(count>0){
                 decodedString+=str[i+1];
                 count--;
             }
         }

         return decodedString;
     }
}

