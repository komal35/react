import React, { useState } from "react";

//1] Event handling 
// when mouse will hover over button it's color will be black and when we move out it will be white
function App() {
//   const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

//   function handleClick() {
//     setHeadingText("Submitted");
//   }
// for this handleClick() in h1 instead of 'Hello' write {headingText}

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        // onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}




// // 2] React forms
// // when we will type something in input field and click on submit button that text in input field will displayed with hello
// function App() {
//   const [name, setName] = useState("");
//   const [headingText, setHeading] = useState("");

//   function handleChange(event) {
//     // console.log(event.target.value);
//     setName(event.target.value);
//   }

//   function handleClick(event) {
//     setHeading(name);

//     event.preventDefault();
//   }

//   return (
//     <div className="container">
//     {/* if in h1 instead of {headingText} we give {name} then that h1 will automatically get update while we are entering in input field  */}
//       <h1>Hello {headingText}</h1>
//       <form onSubmit={handleClick}>
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="What's your name?"
//           value={name}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }




// 3]Complex state
// function App() {
//     const [contact, setContact] = useState({
//       fName: "",
//       lName: "",
//       email: ""
//     });
  
//     function handleChange(event) {
//       const { name, value } = event.target;
  
//       setContact(prevValue => {
//         if (name === "fName") {
//           return {
//             fName: value,
//             lName: prevValue.lName,
//             email: prevValue.email
//           };
//         } else if (name === "lName") {
//           return {
//             fName: prevValue.fName,
//             lName: value,
//             email: prevValue.email
//           };
//         } else if (name === "email") {
//           return {
//             fName: prevValue.fName,
//             lName: prevValue.lName,
//             email: value
//           };
//         }
//       });
//     }

// instead of writing all these if statements we can use spread operator
// setContact(prevValue => {
//   return{
//     ...prevValue,
//     [name]: value      (we are adding [] for name bcoz otherwise it will consider as string means it will add 'name' as another key for contact object which is state variable)
//   };
// });

//     return (
//       <div className="container">
//         <h1>
//           Hello {contact.fName} {contact.lName}
//         </h1>
//         <p>{contact.email}</p>
//         <form>
//           <input
//             onChange={handleChange}
//             value={contact.fName}
//             name="fName"
//             placeholder="First Name"
//           />
//           <input
//             onChange={handleChange}
//             value={contact.lName}
//             name="lName"
//             placeholder="Last Name"
//           />
//           <input
//             onChange={handleChange}
//             value={contact.email}
//             name="email"
//             placeholder="Email"
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
  
// 3]Another way for complex state
// function App() {
//   const [fname, setFName]= useState("");
//   const [lname, setLName]= useState("");
//   const [email, setEmail]= useState(""); 

//   function updateFName(event){
//     setFName(event.target.value);
//   }

//   function updateLName(event){
//     setLName(event.target.value);
//   }

//   function updateEmail(event){
//     setEmail(event.target.value);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fname} {lname}
//       </h1>
//       <p>{email}</p>
//       <form>
//         <input name="fName" onChange={updateFName} placeholder="First Name" value={fname} />
//         <input name="lName" onChange={updateLName} placeholder="Last Name" value={lname} />
//         <input name="email" onChange={updateEmail} placeholder="Email" value={email}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }


export default App;
