import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail3 from './mangaoriginal390x220.jpg';

const VideoThcomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail3} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">How do Manga Authors Do It?
                    </p>
                    <p class="channel-name">Inumaki</p>
                    <p class="video-stats">
                        24k views. 8 months ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoThcomponent;