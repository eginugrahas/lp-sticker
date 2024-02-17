const button = document.getElementById('click')

const token = "edc3829d3fe8e37f9bc9bd6a8cd8a75481248842"

const changeBg = () =>{
    console.log("clicked")
}

changeBg()



// // add this before event code to all pages where PII data postback is expected and appropriate 
// ttq.identify({
// 	"email": "<hashed_email_address>", // string. The email of the customer if available. It must be hashed with SHA-256 on the client side.
// 	"phone_number": "<hashed_phone_number>", // string. The phone number of the customer if available. It must be hashed with SHA-256 on the client side.
// 	"external_id": "<hashed_extenal_id>" // string. Any unique identifier, such as loyalty membership IDs, user IDs, and external cookie IDs.It must be hashed with SHA-256 on the client side.
// });

// ttq.track('ClickButton', {
// 	"contents": [
// 		{
// 			"content_id": "<content_identifier>", // string. ID of the product. Example: "1077218".
// 			"content_name": "<content_name>" // string. The name of the page or product. Example: "shirt".
// 		}
// 	]
// });


