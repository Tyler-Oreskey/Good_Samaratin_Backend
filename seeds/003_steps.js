exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del().then(function() {
    // Inserts seed entries
    return knex('steps').insert([
      {
        id: 1,
        emname: "Cut",
        key: 'Call 911 (If Needed)',
        step: 'If cut is bad enough, call the proper authorities immediatly.'
      }, {
        id: 2,
        emname: "Cut",
        key: 'Disinfect Hands (If Able)',
        step: 'If able, wash hands or apply sanitizer .'
      }, {
        id: 3,
        emname: "Cut",
        key: 'Wash Wound (If Able)',
        step: 'If able, wash wound with soapy water.'
      }, {
        id: 4,
        emname: "Cut",
        key: 'Apply Pressure',
        step: 'Apply direct pressure to the wound.'
      }, {
        id: 5,
        emname: "Cut",
        key: 'Bandage Wound',
        step: 'Apply antibacterial ointment and a clean badage.'
      }, {
        id: 6,
        emname: "Unresponsive",
        key: 'Check for Breathing',
        step: 'Tilt head back an check for breaths.'
      }, {
        id: 7,
        emname: "Unresponsive",
        key: 'Call 911',
        step: 'Call the proper authorities to make sure help is on the way.'
      }, {
        id: 8,
        emname: "Unresponsive",
        key: 'Perform CPR - Chest Compressions',
        step: 'Give 30 chest compressions.'
      }, {
        id: 9,
        emname: "Unresponsive",
        key: 'Perform CPR - Rescue Breaths',
        step: 'Give 2 rescue breaths.'
      }, {
        id: 10,
        emname: "Unresponsive",
        key: 'Perform CPR - Repeat',
        step: 'Repeat previous 2 steps until help arrives.'
      }, {
        id: 11,
        emname: "First Degree Burn",
        key: 'Check Burn',
        step: 'If burn is worse than redness and blistering, call 911.'
      }, {
        id: 12,
        emname: "First Degree Burn",
        key: 'Soak Wound',
        step: 'Put burned skin in cool water for 5 minutes.'
      }, {
        id: 13,
        emname: "First Degree Burn",
        key: 'Take Pain Reliever',
        step: 'Take Ibuprofen for pain relief.'
      }, {
        id: 14,
        emname: "First Degree Burn",
        key: 'Apply Aloe Vera',
        step: 'If able, apply ointment with Aloe Vera in it.'
      }, {
        id: 15,
        emname: "First Degree Burn",
        key: 'Bandage',
        step: 'Apply antibacterial ointment, and cover in loose gauze.'
      }, {
        id: 16,
        emname: "Snake Bite",
        key: 'Safe Place',
        step: 'Move to a safe distance from the snake.'
      }, {
        id: 17,
        emname: "Snake Bite",
        key: 'Call 911',
        step: 'Call the proper authorities to make sure help is on the way.'
      }, {
        id: 18,
        emname: "Snake Bite",
        key: 'Remove Tight Clothing or Jewelry',
        step: 'Remove tight clothing and jewelry before swelling.'
      }, {
        id: 19,
        emname: "Snake Bite",
        key: 'Below Heart',
        step: 'If able, position self so bite is below heart.'
      }, {
        id: 20,
        emname: "Snake Bite",
        key: 'Clean Wound',
        step: 'Do not flush with water, but pat clean, apply dry bandage.'
      }, {
        id: 21,
        emname: "Heart Attack",
        key: 'Call 911',
        step: 'Call the proper authorities to make sure help is on the way.'
      }, {
        id: 22,
        emname: "Heart Attack",
        key: 'Talk to them (If Responsive)',
        step: 'Talk to the person and give them aspirin if available.'
      }, {
        id: 23,
        emname: "Heart Attack",
        key: 'Perform CPR - Chest Compressions',
        step: 'Give 30 chest compressions.'
      }, {
        id: 24,
        emname: "Heart Attack",
        key: 'Perform CPR - Rescue Breaths',
        step: 'Give 2 rescue breaths.'
      }, {
        id: 25,
        emname: "Heart Attack",
        key: 'Perform CPR - Repeat',
        step: 'Repeat previous 2 steps until help arrives.'
      }, {
        id: 26,
        emname: "Broken Arm",
        key: 'Call 911',
        step: 'Call the proper authorities to make sure help is on the way.'
      }, {
        id: 27,
        emname: "Broken Arm",
        key: 'Stop Bleeding (If needed)',
        step: 'Bandage and apply pressure if bleeding.'
      }, {
        id: 28,
        emname: "Broken Arm",
        key: 'Immobilize Arm',
        step: 'Put arm in a place it where it can not cause futher injury.'
      }, {
        id: 29,
        emname: "Broken Arm",
        key: 'Cut Away Sleeve',
        step: 'Make sure arm is exposed and the sleeve is not in the way.'
      }, {
        id: 30,
        emname: "Broken Arm",
        key: 'Apply Ice',
        step: 'Put an ice pack on arm to reduce swelling.'
      }, {
        id: 31,
        emname: "Seizure",
        key: 'Call 911',
        step: 'Call the proper authorities to make sure help is on the way.'
      }, {
        id: 32,
        emname: "Seizure",
        key: 'Keep Clear',
        step: 'Keep other people away from the person having the seizure.'
      }, {
        id: 33,
        emname: "Seizure",
        key: 'Clear Objects',
        step: 'Remove items that the seizing person could harm themselves on.'
      }, {
        id: 34,
        emname: "Seizure",
        key: 'Place on Side',
        step: 'Keep person on their side to keep airway open.'
      }, {
        id: 35,
        emname: "Seizure",
        key: 'Time It',
        step: 'Try to time the length of the seizure.'
      }, {
        id: 36,
        emname: "Choking",
        key: 'Encourage to Talk',
        step: 'If person can talk, encourage to talk, but do not touch.'
      }, {
        id: 37,
        emname: "Choking",
        key: 'Encourage to Cough',
        step: 'If person can communicate, see if coughing will fix it.'
      }, {
        id: 38,
        emname: "Choking",
        key: 'Perform Heimlich',
        step: 'Stand behind and give 5 sharp blows between should blades.'
      }, {
        id: 39,
        emname: "Choking",
        key: 'Blockage Check',
        step: 'See if object has cleared throat and person can speak.'
      }, {
        id: 40,
        emname: "Choking",
        key: 'Repeat and Call 911',
        step: 'If still choking, repeat Heimlich and call 911.'
      }, {
        id: 41,
        emname: "Electrocution",
        key: 'Call 911',
        step: 'Call the proper authorities to make sure help is on the way.'
      }, {
        id: 42,
        emname: "Electrocution",
        key: 'Stop Source of Electricty',
        step: 'Do not touch person, make sure source is turned off.'
      }, {
        id: 43,
        emname: "Electrocution",
        key: 'Perform CPR - Chest Compressions',
        step: 'Give 30 chest compressions.'
      }, {
        id: 44,
        emname: "Electrocution",
        key: 'Perform CPR - Rescue Breaths',
        step: 'Give 2 rescue breaths.'
      }, {
        id: 45,
        emname: "Electrocution",
        key: 'Perform CPR - Repeat',
        step: 'Repeat previous 2 steps until help arrives.'
      }
    ]);

  }).then(function() {
    //Moves id column (PK) auto-incremented to correct value after inserts
    return knex.raw(`SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps))`)
  });
};
