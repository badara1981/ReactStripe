import StripeCheckout from "react-stripe-checkout";
const KEY = "pk_test_51KHRNlIKN3Fcl5ZyQ199M22PMFkGmTkdvTMTAxGvczX1xVpW9nHxFY75TRqxUiuJGgzHN8D1b2yTb04Lo4uBpGKT00SghhsrBl"
const Pay = () => {
  const onToken = (token) => {
  console.log(token)
  }
return (
      
<div
  style={{
  height: "100vh", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center", 
 }
}
>
< StripeCheckOut
>
<button 

style={{
    border: "none",
    width: 120,
    borderRadius: 5,
    padding: "20px",
    backgroundColor: "Black",
    color:"white",
    fontweight:"600",
   cursor: "pointer",
 }}
>
  Pay Now
</button>

<StripeCheckOut/>

</div>

);
};
  
export default Pay;