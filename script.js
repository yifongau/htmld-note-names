const lowestNote = "E2"
const highestNote = "A5"

model = addOctaves(initPitchClasses(12),10)
console.log(model)

/*
A pitchClass is the set of all pitches that are related to each other
through octave equivalence and/or enharmonic equivalence
*/
function initPitchClasses(int){
  const initModel = Array.from({length: int})
  return initModel
}

function addOctaves(initModel, int) {
  const anonModel = initModel.map((pitchClass) => 
    pitchClass = Array.from({length: int})
  )

  const anonModel1 = anonModel.map((pitchClass,x) =>
    pitchClass = pitchClass.map((pitch,y) =>
      pitch = { pitchClass: x, octave: y }
    )
  )
  return anonModel1
}

function addNoteNames(anonModel) {
  const noteNames = ["C","D","E","F","G","A","B"]
  const accidentals = ['', '♭', '♯']
  
  function chromaticScale(){}

  return namedModel
}

function translatePitch(pitch) {

}

function toneDifference(int, pitch) {
  result = pitch + int
  return pitch

}




// pitch is combination of noteName and octave, e.g. C4
