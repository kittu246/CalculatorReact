import React,{useState} from 'react'

const Calculator = () => {

  const [firstNum,SetFirstNum] = useState('');
  const [secondNum,SetSecondNum] = useState('');
  const [validationError,SetvalidationError]=useState('');
  const [result,SetResult]=useState("");

  function implementValidation (num1,num2) {

   if(num1.trim() === '' && num2.trim() ===''){
    SetvalidationError('Numbers Cannot be empty');
   }
   else if( isValid(num1) === false || isValid(num2) === false){

    SetvalidationError('Enter Valid number');
   }
   else{
   SetvalidationError('Success');
   return true;
}
return false;
  }

function isValid(num){
    const parsedNum = parseFloat(num);
    return (!isNaN(parsedNum)); // as isNaN check numbers is Nan or not , if yes means it not valid number and return is false
}

  function implementCalculation (option){

   if(implementValidation(firstNum,secondNum)){
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);

    switch(option){
        case'+':{
            SetResult(`Result is : ${num1+num2}`);
            break;
        }
        case'-':{
            SetResult(`Result is : ${num1-num2}`);
            break;
        }
        case'*':{
            SetResult(`Result is : ${num1*num2}`);
            break;
        }
        case'/':{
            SetResult(`Result is : ${num1/num2}`);
            break;
        }
        default:{
            SetResult('Invalid Operator'); 
        }
    }
   }

    
  }


  return (
    <>
    <div className='mainBody'>
        <div className='calc'>

            <h2>REACT CALCULATOR</h2>
            <input type='text' value={firstNum} placeholder='NUM1' onChange={(e) =>{SetFirstNum(e.target.value)}} ></input>
            <input type='text' value={secondNum} placeholder='NUM2' onChange={(e) =>{SetSecondNum(e.target.value)}} ></input>
            <div className='calcButtonSection'>
                <button className='calcButton' onClick={ () =>{
                    
                    implementCalculation('+')
                }}>+</button>
                <button className='calcButton' onClick={ () =>{
                    
                    implementCalculation('-')
                }}>-</button>
                <button className='calcButton' onClick={ () =>{
                    
                    implementCalculation('*')
                }}>*</button>
                <button className='calcButton' onClick={ () =>{
                   
                    implementCalculation('/')
                }}>/</button>
            </div>

            {validationError ==='Success' ?
               <h3 className='Success'> {validationError}</h3> :
               <h3 className='error'> {validationError}</h3>
            }

            
            <h5>{result}</h5>


        </div>

    </div>
    </>
  )
}



export default Calculator