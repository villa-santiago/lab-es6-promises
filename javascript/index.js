// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {

  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    
    document.querySelector("#mashedPotatoes").innerHTML +=`<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 2, (step3) => {

        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

          getInstruction("mashedPotatoes", 3, (step4) => {

            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

              getInstruction("mashedPotatoes", 4, (step5) => {

                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

              }, (error) => {
                console.log(error);
              })
          }, (error) => {
            console.log(error);
          });

      }, (error) => {
        console.log(error);
      });

  }, (error) => {
    console.log(error);
  });

}, (error) => {
console.log(error);
});



// Iteration 2 - using promises
obtainInstruction("steak", 0)
.then((step0) => {
document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
return obtainInstruction("steak", 1);
})
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  return obtainInstruction("steak", 2);
})
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  return obtainInstruction("steak", 3);
})
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return obtainInstruction("steak", 4);
})
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return obtainInstruction("steak", 5);
})
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return obtainInstruction("steak", 6);
})
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  return obtainInstruction("steak", 7);
})
.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  return obtainInstruction("steak", 8);
})
.catch((err) => {
  console.log(err);
})

// Iteration 3 using async/await
async function makeBrusselsSprouts() {
  try {
    const step0 = await obtainInstruction("brusselsSprouts", 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
  } catch (err) {
    console.log(err);
  }
  try {
    const step1 = await obtainInstruction("brusselsSprouts", 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
  } catch (err) {
    console.log(err);
  }
  try {
    const step2 = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
  } catch (err) {
    console.log(err);
  }
  try {
    const step3 = await obtainInstruction("brusselsSprouts", 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
  } catch (err) {
    console.log(err);
  }
  try {
    const step4 = await obtainInstruction("brusselsSprouts", 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
  } catch (err) {
    console.log(err);
  }
  try {
    const step5 = await obtainInstruction("brusselsSprouts", 5);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
  } catch (err) {
    console.log(err);
  }
  try {
    const step6 = await obtainInstruction("brusselsSprouts", 6);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;
  } catch (err) {
    console.log(err);
  }
  try {
    const step7 = await obtainInstruction("brusselsSprouts", 7);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;
  } catch (err) {
    console.log(err);
  }
}

makeBrusselsSprouts();

// Bonus 2 - Promise all
// ...