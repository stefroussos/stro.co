import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


interface MediaProps {
  id: string
  medium: string | Array<string>
}

const Media = ({ id, medium }: MediaProps) => {
  // Render 2x grid of images
  if (Array.isArray(medium)) {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '48%', marginRight: '4%' }}>
          <Zoom>
            <img
              style={{ width: '100%'}}
              src={`/images/${id}/${medium[0]}`}
              alt={medium[0]}
            />
          </Zoom>
        </div>
        <div style={{ width: '48%' }}>
          <Zoom>
            <img
              style={{ width: '100%'}}
              src={`/images/${id}/${medium[1]}`}
              alt={medium[1]}
            />
          </Zoom>
        </div>
      </div>
    )
  }
  // Render video
  if (medium.includes('vimeo/') || medium.includes('youtube/')) {
    const [provider, videoId] = medium.split('/');
    const src = provider === 'youtube' ? `https://www.youtube.com/embed/${videoId}?rel=0` : `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`
    
    return (
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title={provider} 
          src={src} 
          frameBorder="0" 
          allowFullScreen 
        />
      </div>
    )
  }
  // Render full size image
  return  (
    <Zoom>
      <img
        style={{ width: '100%', marginBottom: '10px' }}
        src={`/images/${id}/${medium}`} 
        alt={medium}
      />
    </Zoom>
  )
}

export default Media