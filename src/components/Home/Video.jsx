const Video = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/69496b2d.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
