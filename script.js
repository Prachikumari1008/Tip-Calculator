const tipCalc= () => {
    let b_amount = document.getElementById('bill_amount').value;

     let t_per = document.getElementById('tip_per').value; 

     let tip = b_amount * (t_per/100);


     let total_amount = tip + Number(b_amount);
  
     document.getElementById('tip_amount').value = tip ;

     document.getElementById('total_amount').value = total_amount;
}