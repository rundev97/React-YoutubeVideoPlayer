import React, {Component} from 'react';

class VideoDetail extends Component {
  render(){
    return(
      <div className='col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/1G4isv_Fylg'></iframe>
        </div>
        <h3> Title of the Video </h3>
        <p> Lorem ipsum dolor sit amet, omnium voluptua posidonium sit an, iudico timeam mandamus et pri, quo in laoreet platonem recteque. Per ferri conceptam percipitur ei, velit ridens ius ei. Vim duis aliquip te. At nam iudicabit constituam, magna ceteros definiebas cu nam, etiam habemus antiopam vis id.</p>

      </div>

    );
  }
}

export default VideoDetail;
