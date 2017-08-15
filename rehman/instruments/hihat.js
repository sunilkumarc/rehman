import React from 'react'
import Tone from 'tone'
import renderer from './renderer'

const distortion = new Tone.Distortion({
  distortion: 0.4,
  wet: 0.4
})

const compress = new Tone.Compressor({
  threshold: -30,
  ratio: 6,
  attack: 0.3,
  release: 0.1
}).toMaster()

const hihat = new Tone.Sampler({
  url: './rehman/audio/hihat.wav'
}).chain(distortion, compress)

class Kick extends React.Component {
  render() {
    renderer(this.props, snare)
    return <span>hihat</span>
  }
}

export default Kick
