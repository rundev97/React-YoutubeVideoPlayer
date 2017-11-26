import React from 'react';

const VideoDetail = ({video}) => {

  if(!video){
    return (
      <div>Loading...</div>
    );
  }

  console.log('***********');
  console.log(video);

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className='col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <h3> {video.snippet.title} </h3>
      <p style={{marginBottom: '50px'}}> {video.snippet.description}</p>



    </div>

  );
};

export default VideoDetail;
