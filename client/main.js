import './main.html'
import Profiles from "../collections";
import Events from "../collections";

Template.eventsList.helpers({
  eventsCollection: () => {
    console.log("Inside events collection function in 'formulario' helper")
    return Events.find({});
  }
});


Template.formulario.events({
  'submit form': (event, template)=> {
    event.preventDefault();

    const target = event.target;

    Events.insert({
      name: target.eventName.value,
      description: target.description.value,
      responsible: target.responsible.value,
      initialDate: target.initialDate.value,
      endDate: target.endDate.value,
      location: target.location.value
    });
    
    target.eventName.value = "";
    target.description.value = "";
    target.responsible.value = "";
    target.initialDate.value = "";
    target.endDate.value = "";
    target.location.value = "";
  }
});

/*
Template.profile.events({
  'click button': (e, i) => {
    console.log("Button clicked");
    Session.set("randomNumber", Math.random(0, 99));
  }
})*/
/*
Template.profile.helpers({
  randomHelper: () => {
    return Session.get("randomNumber");
  },
  
  exampleHelper: () => {
    return "string from exampleHelper"
  },

  profileList: () => {
    return [
      {
        name: "Juan Rodriguez", age: 25
      },
      {
        name: "Juan Mendez", age: 30
      },
      {
        name: "Jefry Mata", age: 25
      }
    ]
  },

  passingData: (myString1, myString2) => {
    console.log(`These are the strings ${myString1} ${myString2}`);
  },

  profilesCollection: ()=>{
    return Profiles.find({});
  }
});*/


