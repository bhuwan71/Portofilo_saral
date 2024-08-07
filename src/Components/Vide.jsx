
const VideoPlayer = () => {
  return (
    <div>
      <video controls width="600">
        <source src="https://154.26.128.9/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
