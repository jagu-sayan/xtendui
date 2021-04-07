import React from 'react'
export default function component() {
  return (
    <div>
      <figure>
        <img src="/img.svg" loading="lazy" alt="" />
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
          ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.
        </figcaption>
      </figure>

      <figure>
        <video className="xt-media" poster="/placeholder-1080.jpg" muted loop playsInline controls>
          <source type="video/mp4" src="/placeholder-1080.mp4" />
        </video>
      </figure>
    </div>
  )
}
