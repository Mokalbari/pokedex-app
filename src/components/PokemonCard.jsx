import React, { useState, useEffect } from 'react'
import './PokemonCard.modules.css'

const PokemonCard = () => {
  const [averageColor, setAverageColor] = useState('')

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      let r = 0
      let g = 0
      let b = 0

      for (let i = 0; i < data.length; i += 4) {
        r += data[i] // Rouge
        g += data[i + 1] // Vert
        b += data[i + 2] // Bleu
      }

      const pixelCount = data.length / 4
      r = Math.floor(r / pixelCount)
      g = Math.floor(g / pixelCount)
      b = Math.floor(b / pixelCount)

      const averageColor = `rgb(${r}, ${g}, ${b})`
      setAverageColor(averageColor)
    }
  }, [])

  return (
    <figure className="container" style={{ backgroundColor: averageColor }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasaur"
      />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  )
}

export default PokemonCard
