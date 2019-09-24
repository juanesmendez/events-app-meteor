import { Meteor } from 'meteor/meteor';
import Profiles from "../collections";
import Events from "../collections";

Meteor.startup(() => {
  if (Profiles.find().count() === 0) {
    console.log("There are no profiles");
    let dummyProfiles = [
      { name: "Ana Toledo", age: 50 },
      { name: "Maribel Gómez", age: 40 },
      { name: "Carlos Torres", age: 60 },
      { name: "Andrea Cadena", age: 65 },
    ];

    dummyProfiles.forEach(e => {
      Profiles.insert(e);
    })
  }
  if (Events.find().count() === 0) {
    console.log("There are no events");
    let dummyEvents = [
      {
        name: "Evento dummy 1",
        description: "Descripcion del evento dummy",
        responsible: "ISIS",
        initialDate: "2019-08-13",
        endDate: "2019-08-18",
        location: "Bogota"
      }
    ];

    dummyEvents.forEach(e => {
      Events.insert(e);
    })
  }
});
