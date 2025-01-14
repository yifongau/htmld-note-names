const lowestNote = "E2"
const highestNote = "A5"

model = addOctaves(initPitchClasses(12),10)
console.log(model)

/*
A pitchClass is the set of all pitches that are related to each other
through octave equivalence and/or enharmonic equivalence
*/
function generateModel(int){
  const chromaticScaleSharps = ["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"]
  const chromaticScaleFlats = ["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"]

  function pitchClasses(x) { 
    return function (x) => Array.from({length: x}) 
  }

  function Octaves(x) {
    return function (x) => 

  }

  const addOctaves = pitchClasses.map((pitchClass) => 
    pitchClass = Array.from({length: int})
  )

  const addAnonProperties = addOctaves.map((pitchClass,x) =>
    pitchClass = pitchClass.map((pitch,y) =>
      pitch = { pitchClass: x, octave: y }
    )
  )

  const namedModel = addAnonProperties.map((pitchClass) =>
    pitchClass = pitchClass.map((pitch) =>
      pitch = pitch.map((names) =>
    )
  )


}

  
   
  


  return namedModel
}


